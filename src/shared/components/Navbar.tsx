import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../icons/HomeIcon'
import ShopIcon from '../icons/ShopIcon'
import LogoutIcon from '../icons/LogoutIcon'

const Navbar: React.FC = () => {

    const [bgcolor, setBgColor] = useState(true)



    useEffect(() => {
        const handleScrooll = () => {
            if (window.scrollY > 50) {
                setBgColor(false)
            } else {
                setBgColor(true)
            }

        }
        window.addEventListener('scroll', handleScrooll)
        return () => window.removeEventListener('scroll', handleScrooll)

    }, [])

    return (
        <nav className={`flex items-center animation duration-500 transition-all w-full ${bgcolor ? 'bg-transparent' : 'bg-black/90'} z-50 fixed top-0 justify-between  h-[63px] text-white`}>
            <div className='container mx-auto flex justify-between'>
                {/* Logo o Título */}
                <div className="flex items-center space-x-4">
                    <h1 className="text-4xl font-normal">Digital<span className='text-[#3674B5] font-bold'>Hub</span></h1>
                </div>

                {/* Botones y enlaces */}
                <div className="flex items-center space-x-7">
                    <button className="hover:text-blue-500 flex gap-x-1 items-end">
                        <HomeIcon /> Home
                    </button>
                    <button className=" hover:text-blue-500 flex gap-x-1 items-end">
                        <ShopIcon /> Compras
                    </button>
                    <Link
                        to="/logout"
                        className=" hover:text-red-500 flex gap-x-1 items-end"
                    >
                        <LogoutIcon /> Salir
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar