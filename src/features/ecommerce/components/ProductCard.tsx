import React from "react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Zapatillas Deportivas",
        description: "Cómodas y ligeras para correr.",
        price: 79.99,
        imageUrl: "https://i.blogs.es/b6f799/41wym-zplbl._sl500_/original.jpeg",
    },
    {
        id: 2,
        name: "Reloj Inteligente",
        description: "Monitoreo de salud y notificaciones.",
        price: 129.99,
        imageUrl: "https://thumbs.ielectro.es/blogs/mejores-portatiles-gaming-de-2024-guia-de-compra.webp",
    },
    {
        id: 3,
        name: "Auriculares Inalámbricos",
        description: "Sonido HD con cancelación de ruido.",
        price: 59.99,
        imageUrl: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/122109529_01/w=800,h=800,fit=pad",
    },
    {
        id: 4,
        name: "Mochila Ejecutiva",
        description: "Diseño elegante y resistente al agua.",
        price: 49.99,
        imageUrl: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120842.jpg",
    },
    {
        id: 5,
        name: "Teclado Mecánico RGB",
        description: "Ideal para gaming y productividad.",
        price: 89.99,
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_916456-MLU78415854102_082024-O.webp",
    },
    {
        id: 6,
        name: "Gafas de Sol Polarizadas",
        description: "Protección UV y diseño moderno.",
        price: 29.99,
        imageUrl: "https://precio.com.co/wp-content/uploads/portatiles/hp/computador-portatil-gamer-hp-15-6-pulgadas-15-ec1025la-amd-ryzen-5-disco-estado-solido-256-gb-negro-precio.webp",
    },
    {
        id: 7,
        name: "Smartphone 5G",
        description: "Pantalla AMOLED y gran autonomía.",
        price: 599.99,
        imageUrl: "https://www.alkosto.com/medias/198122627066-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNDEzNnxpbWFnZS93ZWJwfGFEWTNMMmczWWk4eE5EWTJNakF6TlRZMk9UQXlNaTh4T1RneE1qSTJNamN3TmpaZk1EQXhYemMxTUZkNE56VXdTQXxjOGZjMGExMzNiM2YzZjRjMzFkNTRhOTZlZDNhM2M4MWE5Y2YwMWFmZjY0MDU1YTY1ZGE1Y2QyNzM4YmE0MmZh",
    },
    {
        id: 8,
        name: "Silla Ergonómica",
        description: "Ideal para largas jornadas de trabajo.",
        price: 199.99,
        imageUrl: "https://coacep.com.co/wp-content/uploads/2020/06/Computador-port%C3%A1til-15.6-ACER-57dy-ci5-negro-gamer.jpg",
    },
    {
        id: 9,
        name: "Monitor 27” 144Hz",
        description: "Alta tasa de refresco para gaming.",
        price: 299.99,
        imageUrl: "https://corporativo.tecnoplaza.com.co/wp-content/uploads/2019/07/Portatil-Asus-ROG-Gamer-G7311--600x600.jpg",
    },
    {
        id: 10,
        name: "Cámara Web Full HD",
        description: "Perfecta para videollamadas y streaming.",
        price: 79.99,
        imageUrl: "https://compucentro.co/wp-content/uploads/Nitro5_AN515-57_Bl_Bk_modelmain-1.png",
    },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {

    const handleWhatsAppRedirect = (productId: number) => {
        const phoneNumber = "598649169989223"; // Reemplázalo con el número de WhatsApp real
        // const message = `Hola, estoy interesado en el producto con ID: ${productId}. ¿Podrías darme más información?`;
        const message = `${productId}`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    return (
        <div className="bg-white border border-gray-400 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden ">
            <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="mt-3 flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                    <button
                        onClick={() => handleWhatsAppRedirect(product.id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                        Me interesa
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProductList: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="my-3 w-full flex justify-between">
                <div className="w-full max-w-sm min-w-[200px]">
                    <div className="relative">
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="UI Kits, Dashboards..."
                        />
                        <button
                            className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                            </svg>

                            Search
                        </button>
                    </div>
                </div>


                <div>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <div className="relative">
                            <select
                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                                <option value="brazil">Brazil</option>
                                <option value="bucharest">Bucharest</option>
                                <option value="london">London</option>
                                <option value="washington">Washington</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
