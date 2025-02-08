import React, { ReactNode } from 'react'

interface CardProps {
  element: ReactNode
}

const CardCategoria: React.FC<CardProps> = ({element}) => {
  return (
    <>
        <div className='w-20 h-20 flex justify-center items-center text-white bg-blue-900 rounded-full'>
            <span className='scale-150'>
            {element}
            </span>
        </div>
    </>
  )
}

export default CardCategoria