import { create } from "zustand"


export interface Product {
      id: string,
      category: string,
      product: string,
      description: string,
      image: string,
      price: number,
      stock: number
}

export interface ProductStore {
      products: Product[],
      setProducts: (data: Product[]) => void,
      activeCategory: string,
      setActiveCategory: (category: string) => void
}

export const useProductsStore = create<ProductStore>((set) => ({
      products: [],
      setProducts: (data) => set(() => ({products: data   })),
      activeCategory: 'Todos',
      setActiveCategory: (category) => set({ activeCategory: category })
}))



/* import { create } from "zustand";

export type CategoryType = 'Todas' | 'Tartas' | 'Meriendas'
// En tu archivo donde tengas el store o en un nuevo archivo de constantes
export const CATEGORIAS: CategoryType[] = ['Todas', 'Tartas', 'Meriendas'];

export interface Product {
      id: number;
      nombre: string;
      categoria: CategoryType; // Asegúrate de que coincida con tus tipos
      precio: number;
      descripcion: string;
}

export interface CategoryStore {
      products: Product[];             // Nueva lista de datos
      selectedCategory: CategoryType,
      setCategory: (category: CategoryType) => void
      setProducts: (productos: Product[]) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
      products: [],
      selectedCategory: 'Todas', // Valor por defecto
      setCategory: (category) => set({ selectedCategory: category }),
      setProducts: (products) => set({ products }),
})); */