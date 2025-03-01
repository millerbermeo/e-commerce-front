import React from 'react'
import MainLayout from '../shared/layouts/MainLayout'
import ProductList from '../features/ecommerce/components/ProductCard'

const Ecommerce: React.FC = () => {
    return (
        <>
            <MainLayout>
                <div className="relative bg-[url('banner1.jpg')] bg-contain bg-center w-full flex justify-start items-end h-72 text-white px-10">
                    {/* Capa de opacidad */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between text-white z-10 bg-black/60 p-6 overflow-x-hidden 
        before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#2C5364] before:via-[#203A43] before:to-[#0F2027] before:opacity-60 before:-z-10">
                    </div>

                    <div className="container mx-auto py-10 flex justify-between items-end relative z-20">
                        <div>
                            <h2 className="text-5xl font-black bg-gradient-to-r from-white drop-shadow-2xl to-white text-transparent bg-clip-text relative z-20">
                                Encuentra lo <br /> último en tecnología
                            </h2>
                        </div>

                        <div className="w-96 h-28 bg-[#000000] rounded-2xl translate-y-20 shadow-xl flex justify-center flex-col items-center relative z-20">
                            <p className="text-3xl font-bold">Tu Tienda de Confianza</p>
                            <span className="text-yellow-500">Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                </div>



                <section className='flex gap-10 justify-center w-full my-32 px-5'>
                    <div className="w-full max-w-80 2xl:max-w-96 bg-white border border-gray-300 rounded-2xl  overflow-y-auto">
                        <div className='bg-green-500 p-6'>
                            <h2 className="text-2xl font-bold text-white mb-4">Filtros</h2>

                            {/* Rango de precio */}
                            <div className="mb-6">
                                <label className="block text-lg font-semibold text-white mb-1">Precio</label>
                                <input type="range" min="0" max="5000" className="w-full accent-blue-500" />
                                <div className="flex justify-between text-lg text-white mt-1">
                                    <span>$0</span> <span>$5000+</span>
                                </div>
                            </div>
                        </div>

                        {/* Categorías */}
                        <div className="mb-6 px-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Categoría</label>
                            <select className="w-full border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-300">
                                <option>Todos</option>
                                <option>Laptops</option>
                                <option>Teléfonos</option>
                                <option>Tablets</option>
                                <option>Monitores</option>
                                <option>Accesorios</option>
                                <option>Componentes</option>
                            </select>
                        </div>

                        {/* Marcas */}
                        <div className="mb-6 px-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Marca</label>
                            <div className="grid grid-cols-2 gap-2">
                                {["Apple", "Samsung", "Dell", "HP", "Lenovo", "Asus", "Xiaomi"].map((marca) => (
                                    <label key={marca} className="flex items-center space-x-2 text-gray-700">
                                        <input type="checkbox" className="checkbox  rounded-full border" />
                                        <span>{marca}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Disponibilidad */}
                        <div className="mb-6 px-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Disponibilidad</label>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 text-gray-700">
                                    <input type="radio" name="stock" className="accent-blue-500" />
                                    <span>En stock</span>
                                </label>
                                <label className="flex items-center space-x-2 text-gray-700">
                                    <input type="radio" name="stock" className="accent-blue-500" />
                                    <span>Agotado</span>
                                </label>
                            </div>
                        </div>

                        {/* Sistema operativo */}
                        <div className="mb-6 px-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Sistema Operativo</label>
                            <div className="grid grid-cols-2 gap-2">
                                {["Windows", "MacOS", "Linux", "Android", "iOS"].map((so) => (
                                    <label key={so} className="flex items-center space-x-2 text-gray-700">
                                        <input type="checkbox" className="accent-blue-500" />
                                        <span>{so}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Procesador */}
                        <div className="mb-6 px-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Procesador</label>
                            <div className="grid grid-cols-2 gap-2">
                                {["Intel i3", "Intel i5", "Intel i7", "Intel i9", "AMD Ryzen 5", "AMD Ryzen 7", "Apple M1", "Apple M2"].map((cpu) => (
                                    <label key={cpu} className="flex items-center space-x-2 text-gray-700">
                                        <input type="checkbox" className="accent-blue-500" />
                                        <span>{cpu}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Memoria RAM */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Memoria RAM</label>
                            <select className="w-full border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-300">
                                <option>4 GB</option>
                                <option>8 GB</option>
                                <option>16 GB</option>
                                <option>32 GB</option>
                                <option>64 GB</option>
                            </select>
                        </div>

                        {/* Almacenamiento */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Almacenamiento</label>
                            <select className="w-full border-gray-300 rounded-lg p-2 text-gray-700 focus:ring focus:ring-blue-300">
                                <option>128 GB</option>
                                <option>256 GB</option>
                                <option>512 GB</option>
                                <option>1 TB</option>
                                <option>2 TB</option>
                            </select>
                        </div>

                        {/* Tipo de pantalla */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de pantalla</label>
                            <div className="grid grid-cols-2 gap-2">
                                {["LCD", "OLED", "AMOLED", "Retina", "IPS"].map((pantalla) => (
                                    <label key={pantalla} className="flex items-center space-x-2 text-gray-700">
                                        <input type="checkbox" className="accent-blue-500" />
                                        <span>{pantalla}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Conectividad */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Conectividad</label>
                            <div className="grid grid-cols-2 gap-2">
                                {["WiFi", "Bluetooth", "5G", "4G LTE", "Ethernet", "NFC"].map((conectividad) => (
                                    <label key={conectividad} className="flex items-center space-x-2 text-gray-700">
                                        <input type="checkbox" className="accent-blue-500" />
                                        <span>{conectividad}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Botón de aplicar filtros */}
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                            Aplicar Filtros
                        </button>
                    </div>

                    <div>
                        <ProductList />
                    </div>
                </section>

                <section className="w-full relative h-72 bg-[url('banner3.png')] bg-contain bg-center">
                    {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between text-white z-10 bg-black/60 p-6 overflow-x-hidden 
        before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#2C5364] before:via-[#203A43] before:to-[#0F2027] before:opacity-60 before:-z-10">
                    </div> */}
                </section>
            </MainLayout>
        </>
    )
}

export default Ecommerce