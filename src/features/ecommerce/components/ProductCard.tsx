
import React from "react";
import { useProducts } from "../hooks/productosHooks"; // Importa tu hook aquí

interface Product {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    url_imagen: string; // Cambiado para que coincida con el dato real
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const handleWhatsAppRedirect = (productId: number, nombre: string) => {
        const phoneNumber = "15551741095"; // Reemplázalo con el número de WhatsApp real
        const message = `💬 Me interesa el producto: ${nombre} con código ${productId}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="relative bg-gray-300 rounded-t-2xl rounded-b-2xl cursor-pointer mb-10 w-64 h-full max-h-72 transition-transform transform hover:scale-105">
            <div className=" h-32 flex justify-center items-center">
                <img className="absolute z-20 w-[140px] rounded-full border border-gray-200 bg-white h-[140px] top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain p-2" src={`http://localhost:3000/api/imagenes/static/2/${product.url_imagen}`} alt={product.nombre} />
                <div className="absolute inset-0" style={{ backgroundColor: 'transparent' }}></div> {/* Puedes ajustar el color de fondo aquí si es necesario */}
            </div>
            <div className="p-4 bg-white shadow-xl rounded-b-2xl  flex flex-col h-full text-gray-800">
                <h2 className="text-lg font-semibold text-center">{product.nombre}</h2>
                <p className="mt-2 text-sm text-gray-600 text-center">{product.descripcion}</p>
                <div className="mt-3 flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">${product.precio}</span>
                </div>
                <button className="bg-yellow-500 p-2 py-1 absolute -bottom-3 rounded-4xl -right-2 flex items-center gap-2 ">Agregar <img className="w-8" src="https://images.vexels.com/media/users/3/200098/isolated/preview/7ad7c76da9a0cd7d2b01b64b2590617b-icono-de-carrito-de-compras-icono-de-carrito-de-compras.png" alt="" /></button>
            </div>
        </div>

    );
};

const ProductList: React.FC = () => {
    const { data: products, isLoading, error } = useProducts();

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    }

    if (!products || products.length === 0) {
        return <div>No se encontraron productos.</div>; // Mensaje si no hay productos
    }

    return (
        <div className="mx-auto container">
            <div className="flex flex-wrap justify-start gap-10">
                {products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
