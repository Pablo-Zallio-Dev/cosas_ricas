import { Product } from "../store/useFilterStore";


function parseDriveUrl(url: string): string {
      const match = url.match(/\/d\/(.+?)\//)
      if (!match) return url
      return `https://drive.google.com/uc?export=view&id=${match[1]}`
}

export default async function getProducts(): Promise<Product[]> {
     

      try {
            console.log('Entro')
            const response = await fetch("/api/products")
            if (!response.ok) return []

            const data: Product[] = await response.json()


            return data.map((item) => ({
                  ...item,
                  image: parseDriveUrl(item.image),
            }))


      } catch (error) {
            console.log(error)
            return []
      }

}












/* import { CategoryType, Product } from "@/app/store/useFilterStore"; // Asegúrate de tener esta interfaz

export async function getProductosFromExcel(): Promise<Product[]> {
    const URL_EXCEL_CSV = process.env.NEXT_PUBLIC_URL_PRODUCTOS;

    if (!URL_EXCEL_CSV) return [];

    try {
        const respuesta = await fetch(URL_EXCEL_CSV);
        const textoCsv = await respuesta.text();
        return procesarCsv(textoCsv);
    } catch (error) {
        console.error(error);
        return [];
    }
}

function parseCsvLine(line: string): string[] {
    const result: string[] = [];
    let current = "";
    let insideQuotes = false;

    // Cambiamos el for...of por un for tradicional
    for (let i = 0; i < line.length; i++) {
        const char = line[i]; // Accedemos por índice
        
        if (char === '"') {
            insideQuotes = !insideQuotes;
        } else if (char === "," && !insideQuotes) {
            result.push(current.trim());
            current = "";
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    return result;
}
function procesarCsv(csvText: string): Product[] {
    const lineas = csvText.split(/\r?\n/);
    const resultado: Product[] = [];

    // Empezamos en i=1 para saltar la cabecera
    for (let i = 1; i < lineas.length; i++) {
        if (!lineas[i].trim()) continue;

        const cols = parseCsvLine(lineas[i]);

        // Mapeo exacto según tu imagen:
        // 0:ID, 1:Nombre, 2:Categoría, 3:Precio, 4:Descripción
        resultado.push({
            id: Number(cols[0]),
            nombre: cols[1],
            categoria: cols[2] as CategoryType, // Aquí se asigna tu CategoryType
            precio: Number(cols[3]),
            descripcion: cols[4]
        });
    }
    return resultado;
} */