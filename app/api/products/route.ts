import { NextResponse } from "next/server";

export async function GET() {
  const URL = process.env.SHEETBEST_URL;

  if (!URL) {
    return NextResponse.json(
      { error: "SHEETBEST_URL no configurada" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(URL, {
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Error obteniendo productos" },
      { status: 500 }
    );
  }
}