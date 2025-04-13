import React, { ReactNode } from 'react'

import logoWhatsapp from '../../assets/whatsapp.svg'


type mainLayout = {
    children: ReactNode
}

const MainLayout: React.FC<mainLayout> = ({ children }) => {
    return (
        <>
        {/* <TopBar />
            <Navbar /> */}
            {children}

            <div className='fixed bottom-5 right-5 z-50'>
                <img className='w-14' src={logoWhatsapp} alt="" />
            </div>
        </>
    )
}

export default MainLayout