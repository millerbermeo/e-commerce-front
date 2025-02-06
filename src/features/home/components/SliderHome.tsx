import React from 'react'
import img1 from '../../../assets/img3.jpg'
import sale from '../../../assets/sale.png'
import ArrowRight from '../../../shared/icons/ArrowRight'

const SliderHome: React.FC = () => {
    return (
        <div className="w-full h-screen relative">
            {/* Imagen de fondo */}
            <img src={img1} className="w-full h-full rotate-y-180 object-cover absolute top-0 left-0 z-10" alt="Imagen de fondo" />

            {/* Contenedor del contenido */}
            <div className="absolute top-0  left-0 w-full h-full flex  items-center justify-between text-white z-20 bg-black/80 p-6 overflow-x-hidden">
                <div className='absolute -top-20 right-[29%] rounded-3xl rotate-45 flex justify-start items-end w-72 h-72 bg-black/20'>
                    <div className="-rotate-45 text-center flex flex-col items-center -translate-y-10 translate-x-8">
                        {/* <h3 className="font-bold text-5xl tracking-wide text-white drop-shadow-lg">
                            Productos
                        </h3>
                        <h4 className="text-3xl font-semibold text-yellow-400 mt-2 drop-shadow-lg">
                            En oferta
                        </h4>
                        <p className="text-lg text-gray-200 mt-2 px-10">¡Nuevas promociones todos los días!</p> */}
                    </div>

                </div>
                <div className='container mx-auto flex justify-between px-10'>
                    <div className='absolute bottom-28 -left-20 rounded-3xl rotate-45 flex justify-start items-end w-80 h-80 bg-black/20'>
                        <div className="-rotate-45 text-center flex flex-col items-center -translate-y-10 translate-x-8">

                        </div>

                    </div>
                    <div className='flex flex-col items-start relative'>
                        <h1 className="text-7xl  font-bold text-left">Productos <br /> <span className=' text-[83px] text-[#3674B5]'>Tecnológicos</span></h1>
                        <p className="text-xl text-left mt-4 w-full opacity-70">Explora las últimas tendencias en tecnología, innovación y herramientas avanzadas para mejorar tu experiencia digital y productividad. 🚀💡</p>
                        <button className="mt-6 bg-[#3674B5] cursor-pointer p-3 rounded-2xl hover:bg-blue-800 transition flex gap-x-1">Contactar <ArrowRight /></button>
                    </div>

                    <div className='w-full flex justify-center items-start'>
                        {/* <div className="flex flex-col ml-40 justify-center items-center text-center bg-blue-400/50 shadow-xl border-2 border-blue-500 rounded-full p-4 w-36 h-36">
                           

                           <img src={sale} alt="" />
                        </div> */}

                        <div className="flex flex-col ml-40 justify-center items-center text-center w-36 h-36">
                           

                           <img src={sale} alt="" />
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
