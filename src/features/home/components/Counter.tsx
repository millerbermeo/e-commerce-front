import React from 'react'

interface propsCounter {
    texto: string
    porcentaje: string
}

const Counter: React.FC<propsCounter> = ({ texto, porcentaje = '90' }) => {
    return (
        <>
            <div className='border-2 rounded-full border-[#3674B5]'>
                <div className='w-24 h-24 rounded-full text-center bg-[#3674B5]/50 flex justify-center items-center flex-col'>
                    <span className='text-xl'>{porcentaje}</span>
                    <span className='italic'>{texto}</span>
                </div>
            </div>
        </>
    )
}

export default Counter