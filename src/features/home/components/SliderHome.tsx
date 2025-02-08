import React from 'react'
import img1 from '../../../assets/img3.jpg'
import ArrowRight from '../../../shared/icons/ArrowRight'
import Counter from './Counter'

const SliderHome: React.FC = () => {



    return (
        <div className="w-full h-screen relative">
            {/* Imagen de fondo */}
            <img src={img1} className="w-full h-full rotate-y-180 object-cover absolute top-0 left-0 z-10" alt="Imagen de fondo" />

            {/* Contenedor del contenido */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between text-white z-20 bg-black/60 p-6 overflow-x-hidden 
     before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#2C5364] before:via-[#203A43] before:to-[#0F2027] before:opacity-60 before:-z-10">
                <div className='absolute -top-20 right-[29%] rounded-3xl rotate-45 flex justify-start items-end w-72 h-72 bg-black/20'>
                    <div className="-rotate-45 text-center flex flex-col items-center -translate-y-10 translate-x-8">

                    </div>

                </div>
                <div className='container mx-auto flex justify-between px-10'>
                    <div className='absolute bottom-28 -left-20 rounded-3xl rotate-45 flex justify-start items-end w-80 h-80 bg-black/20'>
                        <div className="-rotate-45 text-center flex flex-col items-center -translate-y-10 translate-x-8">
                        </div>
                    </div>
                    <div className='flex flex-col items-start relative'>
                        <h1 className="text-7xl 2xl:text-[120px] font-bold text-left">Productos <br /> <span className=' text-[83px] text-[#3674B5]'>Tecnológicos</span></h1>
                        <p className="text-xl 2xl:text-2xl text-left mt-4 w-full opacity-70">Explora las últimas tendencias en tecnología, innovación y herramientas avanzadas para mejorar tu experiencia digital y productividad. 🚀💡</p>
                        <button className="mt-6 bg-[#3674B5]/50 cursor-pointer p-3 rounded-full w-40  justify-center border-amber-50 border hover:bg-blue-800 transition flex gap-x-1">Catalogo <ArrowRight /></button>
                    </div>

                    <div className='w-full flex justify-center items-end'>

                        <div className='flex gap-8 translate-x-10 translate-y-20'>
                            <Counter texto='Eficientes' porcentaje='100%' />
                            <Counter texto='Seguros' porcentaje='100%' />
                            <Counter texto='Productos' porcentaje='400+' />
                        </div>

                        <div className='absolute top-40 -right-20 rounded-3xl rotate-45 flex justify-start items-end w-56 h-56 bg-black/20'>
                            <div className="-rotate-45 text-center flex flex-col items-center -translate-y-10 translate-x-8">

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderHome
