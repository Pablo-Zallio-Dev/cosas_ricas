export interface Tarta {
  id: number;
  nivel: string;
  titulo: string;
  descripcion: string;
  caracteristicas: string[];
  precioTexto: string;
  etiquetaAccion: string;
  masElegida: boolean;
  imagen: string;
}

export const TIPOS_TARTAS: Tarta[] = [
  {
    id: 1,
    nivel: "NIVEL 1",
    titulo: "Tarta Básica",
    descripcion: "Decoración sencilla en buttercream, sin adornos adicionales. Mismo sabor, misma calidad, pero más accesible.",
    caracteristicas: [
      "Buttercream liso o con bordes",
      "Sabores seleccionados",
      "Toppers genéricos"
    ],
    precioTexto: "Desde 24€",
    etiquetaAccion: "Encargar",
    masElegida: false,
    imagen: "/images/personalizadas_1.webp"
  },
  {
    id: 2,
    nivel: "NIVEL 2",
    titulo: "Tarta Decorada",
    descripcion: "Un paso más en acabado: goteo de chocolate, flores de azúcar y detalles dorados para una mesa más lucida.",
    caracteristicas: [
      "Drip o pinceladas de color",
      "Flores de azúcar y perlas",
      "Topper a juego"
    ],
    precioTexto: "Desde 34€",
    etiquetaAccion: "Encargar",
    masElegida: true,
    imagen: "/images/personalizadas_2.webp"
  },
  {
    id: 3,
    nivel: "NIVEL 3",
    titulo: "Tarta Personalizada",
    descripcion: "Toppers creados para tu evento, personajes modelados a mano y técnicas complejas de decoración.",
    caracteristicas: [
      "Diseño 100% a medida",
      "Figuras y personajes a mano",
      "Técnicas complejas: ruffles, puzzles, flores"
    ],
    precioTexto: "Presupuesto",
    etiquetaAccion: "Encargar",
    masElegida: false,
    imagen: "/images/personalizadas_3.webp"
  }
];