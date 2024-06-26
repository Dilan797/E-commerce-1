"use client"; // Asegúrate de añadir esta línea

import Image from "next/image";
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
            {productsInfo.filter(p => p.category === categoryName).map(product => (
              <div key={product._id}>{product.name}</div>
            ))}
          </div>
        ))}
        <h2 className="text-2xl">Mobiles</h2>
        <div className="py-4">
          <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl mt-3">
              <Image src="/products/iphone.png" alt="el_compu" width="1000" height="900" />
            </div>
            {/* Nombre del artículo y características de la card */}
            <div className="mt-2">
              <h3 className="font-bold text-lg">Iphone 14 Pro</h3>
            </div>
            <p className="text-sm mt-1 leading-4">Este artículo consta con las últimas características tecnológicas del mercado</p>
            <div className="flex mt-1">
              <div className="text-2xl font-bold grow">$899</div>
              <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
