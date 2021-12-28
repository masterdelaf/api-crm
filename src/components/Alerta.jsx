import React from 'react'

const Alerta = ({children}) => {
    return (
        <div>
            <div className='text-center my-4 bg-red-600 text-white font-bold uppercase py-5'>
                {children}
            </div>
        </div>
    )
}

export default Alerta
