
import React from "react";

export const empresas = [
    { id: 1, nombre: "El Antojo" },
    { id: 2, nombre: "Pollos El Dorado" },
    { id: 3, nombre: "Pizza Pepperoni Co." },
    { id: 4, nombre: "MexiTaco Express" },
    { id: 5, nombre: "Doñarepa" },
    { id: 6, nombre: "Fritanga Rápida" },
    { id: 7, nombre: "Combo Express" },
    { id: 8, nombre: "Wraps & Co." },
    { id: 9, nombre: "Las Papas Locas" },
    { id: 10, nombre: "Campollo" },
    { id: 11, nombre: "NachoManía" },
    { id: 12, nombre: "Empanadas Ricas" },
    { id: 13, nombre: "Mazorcadas Express" },
    { id: 14, nombre: "Parrilla Criolla" },
    { id: 15, nombre: "Sandwich House" }
];


export const staticProducts = [
    {
        id: 1,
        nombre: "Hamburguesa Clásica",
        descripcion: "Jugosa carne, lechuga, tomate y queso cheddar",
        precio: 18000,
        url_imagen: "https://elantojo.co/wp-content/uploads/2023/11/clasica.png",
        id_empresa: 1
    },
    {
        id: 2,
        nombre: "Perro Caliente",
        descripcion: "Salchicha americana con cebolla crujiente y salsas",
        precio: 15000,
        url_imagen: "https://polloseldorado.co/wp-content/uploads/2023/07/Imagenes-2.jpg",
        id_empresa: 2
    },
    {
        id: 3,
        nombre: "Pizza Pepperoni",
        descripcion: "Salsa italiana, queso mozzarella y pepperoni",
        precio: 25000,
        url_imagen: "https://www.hola.com/horizon/landscape/e9e1e82cb873-pepperoni-pizza-abob-t.jpg",
        id_empresa: 3
    },
    {
        id: 4,
        nombre: "Tacos de Pollo",
        descripcion: "Tortilla de maíz con pollo desmechado y guacamole",
        precio: 20000,
        url_imagen: "https://imag.bonviveur.com/tacos-de-pollo.jpg",
        id_empresa: 4
    },
    {
        id: 5,
        nombre: "Arepa Rellena",
        descripcion: "Arepa con queso, carne desmechada y suero costeño",
        precio: 14000,
        url_imagen: "https://doñarepa.com/wp-content/uploads/2024/02/1632-2-AREPAPIZZA-interna.jpg.jpg",
        id_empresa: 5
    },
    {
        id: 6,
        nombre: "Papas a la Francesa",
        descripcion: "Crujientes papas con sal marina",
        precio: 9000,
        url_imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9_fg1NcMJi2wWySEipvwrmyPNgSPA-7ahA&s",
        id_empresa: 6
    },
    {
        id: 7,
        nombre: "Combo Hamburguesa",
        descripcion: "Hamburguesa + papas + gaseosa",
        precio: 28000,
        url_imagen: "https://as2.ftcdn.net/jpg/00/92/04/47/1000_F_92044757_K6rFzZN9mBNu7w8aJFNwEAhzkV0tefUo.jpg",
        id_empresa: 7
    },
    {
        id: 8,
        nombre: "Wrap de Pollo",
        descripcion: "Envoltura con pollo a la plancha, lechuga y salsa ranch",
        precio: 17000,
        url_imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6gtqvIp1gK8niuiqdVlsV_5tkRSpbqqd4g&s",
        id_empresa: 8
    },
    {
        id: 9,
        nombre: "Salchipapas",
        descripcion: "Papas fritas con salchicha, salsas y queso rallado",
        precio: 16000,
        url_imagen: "https://comedera.com/wp-content/uploads/sites/9/2021/07/salchipapas.jpg",
        id_empresa: 9
    },
    {
        id: 10,
        nombre: "Alitas BBQ",
        descripcion: "6 alitas bañadas en salsa BBQ",
        precio: 20000,
        url_imagen: "https://campollo.com/wp-content/uploads/2023/06/ALITAS-PICANTES.jpg",
        id_empresa: 10
    },
    {
        id: 11,
        nombre: "Nachos con Queso",
        descripcion: "Totopos con queso fundido, guacamole y jalapeños",
        precio: 15000,
        url_imagen: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
        id_empresa: 11
    },
    {
        id: 12,
        nombre: "Empanadas",
        descripcion: "Empanadas de carne con ají casero",
        precio: 8000,
        url_imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2rvFbZs-nBTV3j9_9mCBeDzHNYZM6FVFfQ&s",
        id_empresa: 12
    },
    {
        id: 13,
        nombre: "Mazorcada",
        descripcion: "Mazorca desgranada con pollo, papas, queso y salsas",
        precio: 22000,
        url_imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/MFWEOXSVXRENHEAXS4QRMC6NVA.jpg",
        id_empresa: 13
    },
    {
        id: 14,
        nombre: "Choripán",
        descripcion: "Chorizo artesanal con chimichurri en pan crocante",
        precio: 18000,
        url_imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMA-FWnJT2EKpJe39ZdMrvRyBM2M6gkl1cQ&s",
        id_empresa: 14
    },
    {
        id: 15,
        nombre: "Sándwich de Atún",
        descripcion: "Pan artesanal, atún, lechuga y mayonesa",
        precio: 16000,
        url_imagen: "https://images.immediate.co.uk/production/volatile/sites/30/2024/04/HamSandwich-0d4e4ff.jpg?quality=90&resize=556,505",
        id_empresa: 15
    }
];


interface Product {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    url_imagen: string; // Cambiado para que coincida con el dato real
    id_empresa: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const handleWhatsAppRedirect = () => {
        const empresa = empresas.find((e) => e.id === product.id_empresa);
        const nombreEmpresa = empresa ? empresa.nombre : "Empresa desconocida";

        const phoneNumber = "15551741095";
        const message = `1)📦 Solicitud de Domicilio
  
  Producto: *${product.nombre}*
  Precio: $${product.precio.toLocaleString("es-CO")}
  Empresa: *${nombreEmpresa}*
  
  📍 Me gustaría pedir este producto a domicilio. ¿Está disponible?`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="relative bg-gray-300 rounded-2xl cursor-pointer mb-10 w-full sm:w-64 md:w-60 lg:w-64 xl:w-72 max-w-xs transition-transform transform hover:scale-105">
            <div className="h-32 flex justify-center items-center relative">
                <img
                    className="absolute z-20 w-[120px] sm:w-[130px] md:w-[140px] h-[120px] sm:h-[130px] md:h-[140px] rounded-full border border-gray-200 bg-white top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover p-2"
                    src={`${product.url_imagen}`}
                    alt={product.nombre}
                />
                <div className="absolute inset-0 bg-transparent"></div>
            </div>

            <div className="p-4 bg-white shadow-xl rounded-b-2xl flex flex-col text-gray-800 min-h-[200px]">
                <h2 className="text-base sm:text-lg font-semibold text-center">{product.nombre}</h2>
                <p className="mt-2 text-sm text-gray-600 text-center">{product.descripcion}</p>

                <div className="mt-3 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">${product.precio}</span>
                </div>

                <button
                    onClick={handleWhatsAppRedirect}
                    className="bg-green-500 text-white px-3 py-2 mt-4 rounded-full flex items-center gap-2 self-end hover:bg-green-600 transition cursor-pointer"
                >
                    Domicilio
                    <img
                        className="w-6 h-6"
                        src="https://images.icon-icons.com/2592/PNG/512/whatsapp_logo_icon_154480.png"
                        alt="WhatsApp"
                    />
                </button>
            </div>
        </div>
    );
};


const ProductList: React.FC = () => {
    const products = staticProducts;

    return (
        <div className="mx-auto container">
            <div className="flex flex-wrap justify-center gap-10">
                {products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
