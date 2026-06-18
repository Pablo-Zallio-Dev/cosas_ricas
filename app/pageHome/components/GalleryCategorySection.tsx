'use client'
import { Category, getCategoriesFromExcel } from "@/app/data/excel.category";
import { useEffect, useState } from "react";
import CardCategories from "./CardCategories";

export default function GalleryCategorySection(){

const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


   
    useEffect(() => {
    async function loadData() {
        try {
            const data = await getCategoriesFromExcel();
            console.log("Categorias recibidas:", data); // <-- debug
            setCategories(data);
        } catch (error) {
            console.error("Error loading categories:", error);
        } finally {
            setLoading(false);
        }
    }
    loadData();
}, []);

    if (loading) {
         return (
    <section className="flex flex-wrap justify-center items-center gap-6 py-14 px-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="
            flex flex-col gap-4
            p-2
            w-70
            h-102
            rounded-xl
            border border-border
            animate-pulse
          "
        >
            <div className=" w-full h-full bg-border rounded-xl "></div>
        </div>
      ))}
    </section>
  )
    }

    

      return(
            <section className=" flex flex-wrap justify-center items-center gap-6 py-14 px-2 max-h-full ">
                  {
                        categories.map((category) =>(
                              <CardCategories key={category.id} image={category.imagenUrl} titleCard={category.categoria} textCard={category.descripcion} />
                        ))
                  }      
            </section>
      )
}