import React from 'react'
import MainLayout from '../shared/layouts/MainLayout'
import Facebook from '../shared/icons/Facebook'
import Instagram from '../shared/icons/Instagram'
import X from '../shared/icons/X'
import TikTok from '../shared/icons/Tiktok'

const Ecommerce: React.FC = () => {
    return (
        <>
            <MainLayout>
                <div className="bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364] h-full w-full flex justify-center pt-52 text-white">

                    <div className='container max-auto w-full flex justify-between mb-96'>
                        <div className='w-[35%]'>
                        <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Siguenos :</h2>
                        <div className='flex w-full gap-x-4 text-3xl my-5'>
                        <Facebook/>
                        <Instagram />
                        <X />
                        <TikTok />
                        </div>
                        </div>


                        <div className="w-full">
                            <div className="mx-auto">
                                <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Gallery</h3>
                                        <p className="mt-2 max-w-md text-gray-600 dark:text-gray-300 hidden md:block">
                                            Explore a collection of high-quality images showcasing various themes and styles.
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-6 py-3 text-center text-sm font-semibold text-gray-600 dark:text-gray-200 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                        View More
                                    </a>
                                </div>

                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                                    {[
                                        { src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620", label: "VR" },
                                        { src: "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a", label: "Tech", span: "md:col-span-2" },
                                        { src: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c", label: "Dev", span: "md:col-span-2" },
                                        { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f", label: "Retro" }
                                    ].map(({ src, label, span }, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className={`group relative flex h-48 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg transition transform hover:scale-105 ${span || ""}`}
                                        >
                                            <img
                                                src={src + "?auto=format&q=75&fit=crop&w=1000"}
                                                loading="lazy"
                                                alt={label}
                                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-60"></div>
                                            <span className="relative ml-4 mb-3 text-white text-lg font-medium">{label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </MainLayout>
        </>
    )
}

export default Ecommerce