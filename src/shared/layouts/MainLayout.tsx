import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import logoWhatsapp from '../../assets/whatsapp.svg'
import TopBar from '../components/TopBar'

type mainLayout = {
    children: ReactNode
}

const MainLayout: React.FC<mainLayout> = ({ children }) => {
    return (
        <>
        <TopBar />
            <Navbar />
            {children}

            <div className='fixed bottom-5 right-5 z-50'>
                <img className='w-14' src={logoWhatsapp} alt="" />
            </div>
        </>
    )
}

export default MainLayout