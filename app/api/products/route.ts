import { NextResponse } from "next/server";

function parseCSV(csvText: string) {
  const lines = csvText.split("\n").filter((line) => line.trim() !== "");
  if (lines.length === 0) return [];

  const headers = lines[0].split(",").map((h) => h.trim().replace(/^"|"$/g, ""));

  return lines.slice(1).map((line) => {
    const values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    const row: Record<string, string> = {};

    headers.forEach((header, index) => {
      let val = values[index] ? values[index].trim() : "";
      val = val.replace(/^"|"$/g, "");
      row[header] = val;
    });

    return row;
  });
}

function parseDriveUrl(url: string): string {
  if (!url || typeof url !== "string") return "/images/logo.png";
  const match = url.match(/(?:d\/|id=)([\w-]+)/);
  if (!match || !match[1]) return url;
  return `https://drive.google.com/uc?export=view&id=${match[1]}`;
}

export async function GET() {
  const URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJhiKOepOJzw4OO0bclVDq6yKuxdIgMsmTVU72ssl2EJmJP6vwPR-4ffEVRCHjWu7yPRwq3LyGI4jd/pub?gid=0&single=true&output=csv";

  try {
    const response = await fetch(URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "No se pudo obtener el archivo de Google Sheets" },
        { status: 500 }
      );
    }

    const csvText = await response.text();

    const rawData = parseCSV(csvText);

    const products = rawData
      .map((row, index) => ({
        id: row.id || row.Id || String(index + 1),
        category: row.category || row.categoria || row.Categoría || "Otros",
        product: row.product || row.producto || row.Producto || "",
        description: row.description || row.descripcion || row.Descripción || "",
        image: parseDriveUrl(row.image || row.imagen || ""),
        price: Number(row.price || row.precio || row.Precio || 0),
        stock: Number(row.stock || row.Stock || 0),
      }))
      .filter((p) => p.product.trim() !== ""); 
      
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error procesando CSV:", error);
    return NextResponse.json(
      { error: "Error obteniendo productos" },
      { status: 500 }
    );
  }
}