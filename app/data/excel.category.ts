export interface Category {
    id: string;
    categoria: string;
    descripcion: string;
    imagenUrl: string;
    orden: number;
    activo: boolean;
}

export async function getCategoriesFromExcel(): Promise<Category[]> {
    const URL_EXCEL_CSV = process.env.NEXT_PUBLIC_URL_CATEGORIES;

    if (!URL_EXCEL_CSV) {
        console.error("URL no definida");
        return [];
    }

    try {
        const respuesta = await fetch(URL_EXCEL_CSV);
        if (!respuesta.ok) throw new Error("Error al conectar");

        const textoCsv: string = await respuesta.text();
        console.log(textoCsv)
        return procesarCsv(textoCsv);
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Parser de CSV que respeta comas dentro de comillas
function parseCsvLine(line: string): string[] {
    const result: string[] = [];
    let current = "";
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

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

function procesarCsv(csvText: string): Category[] {
    const lineas: string[] = csvText.split(/\r?\n/);
    const resultado: Category[] = [];

    for (let i = 1; i < lineas.length; i++) {
        if (!lineas[i].trim()) continue;

        const columnas: string[] = parseCsvLine(lineas[i]);

        const nuevaCategoria: Category = {
            id: columnas[0] || "",
            categoria: columnas[1] || "",
            descripcion: columnas[2] || "",
            imagenUrl: columnas[3] || "",
            orden: Number(columnas[4]) || 0,
            activo: (columnas[5] || "").toUpperCase() === "SI",
        };

        resultado.push(nuevaCategoria);
    }

    // opcional: ordenar por "orden" y filtrar inactivas
    return resultado
        .filter((c) => c.activo)
        .sort((a, b) => a.orden - b.orden);
}

