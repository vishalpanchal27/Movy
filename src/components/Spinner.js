import React from 'react'

import './Spinner.css'
const Spinner = () => {
    return (
        <div className='h-screen flex items-center justify-end flex-col'>
            <div className="lds-hourglass"></div>
            <p className='text-xl'>Loading....</p>
        </div>
    )
}

export default Spinner
