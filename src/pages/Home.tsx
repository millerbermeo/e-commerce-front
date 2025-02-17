import React, { useState } from 'react'
import MainLayout from '../shared/layouts/MainLayout'
import SliderHome from '../features/home/components/SliderHome'
import ArrowIcon from '../shared/icons/ArrowIcon';
import CardCategoria from '../features/home/components/CardCategoria';
import portatil1 from '../assets/portatil1.jpg'
import portatil2 from '../assets/portatil2.png'
import PcIcon from '../shared/icons/PcIcon';
import CellIcon from '../shared/icons/CellIcon';
import SoundIcon from '../shared/icons/SoundIcon';
import ServerIcon from '../shared/icons/ServerIcon';
import GalleryCard from '../features/home/components/GalleryCard';


const Home: React.FC = () => {

    const [show, setShow] = useState(false);

    const handleScrollDown = () => {
        setShow(!show);

        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollTop + 500,
                behavior: "smooth"
            });
        }, 100); // Un pequeño retraso para asegurar que el contenido se muestre antes de hacer scroll
    };


    return (
        <>
            <MainLayout>

                <SliderHome />




                <span onClick={handleScrollDown} className='absolute w-full animate-bounce justify-center flex text-blue-700 bottom-12 z-50  text-xl font-light cursor-pointer'>
                    <p><ArrowIcon /></p>
                </span>

                <button onClick={handleScrollDown} className='absolute hover:text-blue-700 bottom-5 z-50 left-0 right-0 text-white text-xl font-light cursor-pointer'>
                    {!show ? 'Explorar más tecnologías' : 'Ocultar contenido'}
                </button>

                {show ? <div className='bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364]'>

                    <section className='w-full flex justify-center gap-10 container mx-auto py-40'>

                        <div className='w-full flex justify-start items-start flex-col gap-y-5'>
                            <p className='text-white text-2xl'>Encuentra </p>
                            <div className='flex gap-x-6'>
                                <CardCategoria element={<PcIcon />} />
                                <CardCategoria element={<CellIcon />} />
                                <CardCategoria element={<SoundIcon />} />
                                <CardCategoria element={<ServerIcon />} />
                            </div>

                            <div className='flex w-full justify-start py-5 flex-col gap-y-6 text-white'>
                                <h3 className='font-bold text-6xl 2xl:text-7xl'>Portatiles <span className='text-purple-800'>Gamer</span></h3>
                                <div className='w-full h-[0.1px] bg-white'></div>
                                <p className='text-lg 2xl:text-2xl font-normal'>
                                    <span className='opacity-70'>
                                        Descubre la mejor tecnología en portátiles diseñados para alto rendimiento, gráficos avanzados y experiencias inmersivas.
                                    </span>
                                    <span className='text-purple-700 opacity-100'>
                                        Equipos optimizados para gamers y profesionales que buscan velocidad, potencia y eficiencia en cada tarea.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className='w-full flex justify-end items-end flex-col'>

                            <div className='relative rounded-full bg-[#2C5364] w-[400px] 2xl:w-[500px] h-[400px] 2xl:h-[500px] border-[#2b6781] border-3'>
                                <img className='w-[450px] 2xl:w-[560px] 2xl:h-[470px] absolute -left-24 -bottom-5' src='https://www.microxol.com/wp-content/uploads/2023/04/Product_20230415113210913378521.Katana-4.webp' alt="" />
                            </div>

                            <div className='w-[500px] pt-6'>
                                <p className='font-black text-4xl 2xl:text-5xl text-center text-white'>Portatil <span className='text-[#F703FB]'>Asus TX1</span></p>
                            </div>

                        </div>
                    </section>




                    <div className='flex w-full justify-center items-center text-xl text-white h-20 bg-gradient-to-t from-[#2C5364] via-[#2C5364] to-[#2C5364]'>
                        <p>Equipos diseñados con la última tecnología para maximizar tu productividad y rendimiento.</p>
                    </div>




                    <section className='w-full bg-gradient-to-b via-[#203A43] to-[#0F2027] py-50 px-16 flex justify-center gap-x-20'>

                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src={portatil1} alt="Laptop avanzada" />

                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Rendimiento extremo</div>
                                <p className="text-gray-700 text-base">
                                    Procesadores de última generación y tarjetas gráficas potentes para una experiencia fluida en juegos y diseño.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gaming</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tecnología</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#innovación</span>
                            </div>
                        </div>

                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white scale-110">
                            <img className="w-full" src={portatil2} alt="Laptop potente" />

                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Eficiencia y velocidad</div>
                                <p className="text-gray-700 text-base">
                                    Equipadas con almacenamiento SSD y pantallas de alta frecuencia para una respuesta rápida y clara.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hardware</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#rendimiento</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gaming</span>
                            </div>
                        </div>

                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src={portatil1} alt="Laptop moderna" />

                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Diseño innovador</div>
                                <p className="text-gray-700 text-base">
                                    Pantallas de alta resolución, retroiluminación RGB y sistemas de refrigeración avanzada.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tecnología</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#futurismo</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#eficiencia</span>
                            </div>
                        </div>

                    </section>


                  <section className='container mx-auto bg-[#121212]'>
                  <GalleryCard />
                  </section>



                </div> : ''}

            </MainLayout>
        </>
    )
}

export default Home