import React from 'react'
import MainLayout from '../shared/layouts/MainLayout'
import ProductList from '../features/ecommerce/components/ProductCard'

const Ecommerce: React.FC = () => {
    return (
        <>
            <MainLayout>
                {/* <div className="relative bg-[url('banner1.jpg')] bg-contain bg-center w-full flex justify-start items-end h-72 text-white px-10">
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
 */}


                <section className='flex gap-10 justify-center w-full my-32 px-5'>

                    <div>
                        <ProductList />
                    </div>
                </section>


            </MainLayout>
        </>
    )
}

export default Ecommerce