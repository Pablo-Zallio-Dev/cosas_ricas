"use client";
import getProducts from "@/app/data/excel.products";
import { useProductsStore } from "@/app/store/useFilterStore";
import { useEffect } from "react";
import CardGallery from "./CardGallery";
import BtnGallery from "@/app/components/common/BtnGallery";

export default function GalleryProducts() {
  const setProduct = useProductsStore((state) => state.setProducts);
  const products = useProductsStore((state) => state.products);
  const activeCategory = useProductsStore((state) => state.activeCategory);
  const setActiveCategory = useProductsStore(
    (state) => state.setActiveCategory,
  );

  useEffect(() => {
    const load = async () => {
      const data = await getProducts();
      setProduct(data);
    };

    load();
  }, [setProduct]);
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);


      
  if (products.length === 0) {
    return (
      <section className="flex flex-wrap justify-center items-center gap-6 py-14 px-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="
            flex flex-col gap-4
            p-2
            w-70
            h-90
            rounded-xl
            border border-border
            animate-pulse
          "
          >
            <div className=" w-full h-full bg-border rounded-xl "></div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className=" flex flex-col gap-12 w-full ">
      <section className=" flex flex-wrap justify-center gap-3 mt-10  ">
        {categories.map((cat) => (
          <BtnGallery
            key={cat}
            activeCategory={activeCategory}
            cat={cat}
            onClick={() => setActiveCategory(cat)}
            textBtn={cat === "all" ? "Todos" : cat}
          />
        ))}
      </section>
      <section className=" flex flex-wrap  gap-8 lg:gap-24 justify-center ">
        {filtered.map((product) => (
          <CardGallery key={product.id} product={product} />
        ))}
      </section>
    </section>
  );
}

/* 

export default function GalleryProducts() {

      const { products, setProducts, selectedCategory } = useCategoryStore();


      useEffect(() => {
    async function loadProductos() {
      const datos = await getProductosFromExcel();
      setProducts(datos);
    }
    loadProductos();
  }, [setProducts]);

  const productosFiltrados = products.filter((p) => 
    selectedCategory === 'Todas' ? true : p.categoria === selectedCategory
  );

console.log(products[0])

      
      return (
            <section className=" flex flex-col gap-12 w-full ">
                  <section className=" flex justify-center gap-2 mt-10 ">
                       {
                        CATEGORIAS.map((cat) => (
                             <BtnGallery key={cat} textBtn={cat} />
                        ))
                       }
                  </section>
                  <section className=" flex flex-wrap  gap-8 lg:gap-24 justify-center ">
                      {
                        productosFiltrados.map((product) => (
                              <CardGallery product={product} />
                        ))
                      }
                        
                  </section>
            </section>


      )
} */
