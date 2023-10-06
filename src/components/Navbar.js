import React from 'react'
import '../App.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {



    return (
        <div className='flex justify-around items-center h-[7vh] shadow-2 shadow-md m'>
            <div className='text-4xl font-bold'>
                <Link to="/" className='underline'> <span className='text-red-500'>M</span><span className=' text-gray-900'>ovy</span></Link>
            </div>
            <div>
                <ul className='flex gap-10 text-lg mt-3'>
                    <NavLink to='/' className='text-gray-900 no-underline hover:no-underline hover:text-red-500 active:text-red-700 focus:no-underline'> <p className='text-black'> Home </p></NavLink>
                    <NavLink to='/favourite' className='text-gray-900 no-underline hover:no-underline hover:text-red-500 active:text-red-700 focus:no-underline'> <p className='text-black'> Favourite </p> </NavLink>

                    {
                        <NavLink to='/SignUp' className='text-gray-900 no-underline hover:no-underline hover:text-red-500 active:text-red-700 focus:no-underline'> <p className='text-black'> Sign Up </p></NavLink>


                    }
                </ul>
            </div>
        </div >
    )
}

export default Navbar
