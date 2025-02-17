import React from "react";
import { useProducts } from "./productosHooks"; // Importa tu hook aquí

interface Product {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imageUrl: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const handleWhatsAppRedirect = (productId: number, nombre: string) => {
        const phoneNumber = "15551741095"; // Reemplázalo con el número de WhatsApp real
        const message = `💬 Me interesa este producto: ${nombre} con código 🆔 ${productId} 🔥`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="bg-white border border-gray-400 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden ">
            <img className="w-full h-48 object-cover" src='https://www.professionalwireless.com.co/wp-content/uploads/2024/09/TUF-F15-FX507VI_16GB-scaled.jpg' alt={product.nombre} />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{product.nombre}</h2>
                <p className="text-gray-600 text-sm">{product.descripcion}</p>
                <div className="mt-3 flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">${product.precio}</span>
                    <button
                        onClick={() => handleWhatsAppRedirect(product.id, product.nombre)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                        Me interesa
                    </button>
                </div>
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

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="my-3 w-full flex justify-between">
                <div className="w-full max-w-sm min-w-[200px]">
                    <div className="relative">
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Buscar productos..."
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products?.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
