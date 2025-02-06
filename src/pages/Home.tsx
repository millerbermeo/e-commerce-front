import React, { useState } from 'react'
import MainLayout from '../shared/layouts/MainLayout'
import SliderHome from '../features/home/components/SliderHome'
import ArrowIcon from '../shared/icons/ArrowIcon';
import CardCategoria from '../features/home/components/CardCategoria';

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

                {show ? <div className='h-screen'>

                    <div className='w-full flex justify-center my-10 gap-10'>
                        <CardCategoria />
                        <CardCategoria />
                        <CardCategoria />
                        <CardCategoria />
                        <CardCategoria />
                        <CardCategoria />
                    </div>

                </div> : ''}

            </MainLayout>
        </>
    )
}

export default Home