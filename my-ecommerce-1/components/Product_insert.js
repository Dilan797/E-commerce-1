/*En este código encontramos la insercion de los articulos*/
import Image from 'next/image';

export default function Product_insert({ product }) {
    return (
        //En la siguiente linea podemos organizar de manera general las cards de cada articulo
        <div className="product-card bg-white shadow-md rounded-lg p-4 m-4">
        <div className="flex items-center">
            {product.picture && (
            <Image 
                src={product.picture} 
                alt={product.name} 
                width={100}  // Ajusta estos valores según el tamaño real de tus imágenes
                height={100}  // Ajusta estos valores según el tamaño real de tus imágenes
                className="w-20 h-20 object-cover rounded-full"
            />
            )}
            <div className="ml-4 px-2">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            
            
            </div>
        </div>
        <div className="flex mt-1">
            <div className="text-2xl font-bold grow">${product.price}</div>
            <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
        </div>
        </div>
    );
}
