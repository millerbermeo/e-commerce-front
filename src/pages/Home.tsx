import React, { useState } from 'react'
import MainLayout from '../shared/layouts/MainLayout'
import SliderHome from '../features/home/components/SliderHome'
import ArrowIcon from '../shared/icons/ArrowIcon';
import CardCategoria from '../features/home/components/CardCategoria';
import portatil1 from '../assets/portatil1.jpg'
import portatil2 from '../assets/portatil2.png'

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
                    {!show ? 'ver mas !!' : 'ver menos !!'}
                </button>

                {show ? <div className='bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364]'>

                    <section className='w-full flex justify-center gap-10 container mx-auto py-40'>

                        <div className='w-full flex justify-start items-start flex-col gap-y-8'>
                            <div className='flex gap-x-6'>
                                <CardCategoria />
                                <CardCategoria />
                                <CardCategoria />
                                <CardCategoria />
                                <CardCategoria />
                                <CardCategoria />
                            </div>

                            <div className='flex w-full justify-start py-5 flex-col gap-y-6 text-white'>
                                <h3 className='font-bold text-7xl'>Portatiles <span className='text-purple-800'>Gamer</span></h3>
                                <div className='w-full h-[0.1px] bg-white'></div>
                                <p className='text-2xl font-normal'><span className='opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt facilis aut, incidunt quam a. Voluptas nesciunt consequuntur, fuga vitae nobis eum provident alias.</span> <span className='text-purple-700 opacity-100'>
                                    Rem aliquam iusto fugiat repudiandae ullam nisi esse, delectus minima reiciendis sapiente eius tempore quod molestias</span></p>
                            </div>
                        </div>

                        <div className='w-full flex justify-end items-end flex-col'>

                            <div className='relative rounded-full bg-white w-[500px] h-[500px] border-white border-2'>
                                <img className='w-[560px] h-[470px] absolute -left-24 -bottom-5' src={portatil2} alt="" />
                            </div>

                            <div className='w-[500px] pt-6'>
                                <p className='font-black text-5xl text-center text-white '>Poratil Asus TX1</p>
                            </div>

                        </div>
                    </section>

    


                    <div className='flex w-full  justify-center items-center text-xl text-white h-20 bg-gradient-to-t from-[#2C5364] via-[#2C5364] to-[#2C5364]'>
                        <p className='
'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus similique voluptatem possimus error pariatur eaque ad cupiditate facere repudiandae omnis.</p>
                    </div>




                    <section className='w-full bg-gradient-to-b via-[#203A43] to-[#0F2027] py-50 px-16 flex justify-center gap-x-20'>

                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src={portatil1} alt="Sunset in the mountains" />

                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>

                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white scale-110">
                            <img className="w-full" src={portatil1} alt="Sunset in the mountains" />

                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>


                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src={portatil1} alt="Sunset in the mountains" />

                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>




                    </section>




                </div> : ''}

            </MainLayout>
        </>
    )
}

export default Home