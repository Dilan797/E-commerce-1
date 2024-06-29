"use client"; // Asegúrate de añadir esta línea


import Product_insert from "@/components/Product_insert";
import { useEffect, useState } from "react";

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);

  // Código para llamar los productos de la API
  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(json => setProductsInfo(json))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const categoriesNames = productsInfo.length > 0 ? [...new Set(productsInfo.map(p => p.category))] : [];

  return (
    <div className="p-5">
      {/* Crear categorías */}
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            <h2 className="text-2xl capitalize">{categoryName}</h2>
            <div className="flex px-9 -mx-6"> 
              
              {productsInfo.filter(p => p.category === categoryName).map(product => (
                <Product_insert key={product._id} product={product} />
              ))}
              </div>
          </div>
        ))}
        
        <div className="py-4">
          
        </div>
      </div>
    </div>
  );
}
