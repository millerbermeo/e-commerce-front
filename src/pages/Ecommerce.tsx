import React from 'react'
import MainLayout from '../shared/layouts/MainLayout'
import ProductList from '../features/ecommerce/components/ProductCard'

const Ecommerce: React.FC = () => {
    return (
        <>
            <MainLayout>
                <div className="bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364]  w-full flex justify-start items-end h-72 text-white">

                    <div className='container mx-auto py-10 flex justify-between items-end'>
                        <div><h2 className='text-4xl font-light'>Ecuentra lo <br /> ultimo en tecnología</h2></div>

                        <div className='w-96 h-28 bg-amber-300 rounded-2xl translate-y-20 shadow-xl flex justify-center flex-col items-center'>
                            <p className='text-3xl font-bold'>Tu Tienda de Confianza</p>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>

                </div>

                <ProductList />
            </MainLayout>
        </>
    )
}

export default Ecommerce