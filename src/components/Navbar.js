import React, { useState } from 'react'
import '../App.css'
import { Link, NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx"

const Navbar = () => {
    const [menu, setMenu] = useState(true)
    console.log(window.innerWidth)

    const handleMenu = (value) => {
        value === true ? setMenu(false) : setMenu(true)
    }

    return (
        <div className='flex justify-around items-center h-[7vh] shadow-2 shadow-md'>
            {window.innerWidth > 450 &&
                <div className='flex justify-between item-center  w-10/12'>
                    <div className='text-4xl font-bold'>
                        <Link to="/" className='underline'> <span className='text-red-500'>M</span><span className=' text-gray-900'>ovy</span></Link>
                    </div>
                    <div>
                        <ul className='flex gap-10 text-lg mt-3'>
                            <NavLink to='/Movy' className='text-gray-900 no-underline hover:no-underline hover:text-red-500 active:text-red-700 focus:no-underline'> <p className='text-black'> Home </p></NavLink>
                            <NavLink to='/favourite' className='text-gray-900 no-underline hover:no-underline hover:text-red-500 active:text-red-700 focus:no-underline'> <p className='text-black'> Favourite </p> </NavLink>

                            {
                                <NavLink to='/SignUp' className='text-gray-900 no-underline hover:no-underline hover:text-red-500 active:text-red-700 focus:no-underline'> <p className='text-black'> Sign Up </p></NavLink>


                            }
                        </ul>
                    </div>
                </div>
            }
            {
                window.innerWidth < 1000 &&
                <div>
                    <div className='text-4xl flex font-bold justify-between  w-[25rem] '>
                        <div>
                            <Link to="/" className='underline'> <span className='text-red-500'>M</span><span className=' text-gray-900'>ovy</span></Link>
                        </div>
                        {menu ?
                            (<div className='text-black flex mt-2' onClick={() => { handleMenu(true) }} >
                                <IoMenu />
                            </div>) :
                            (
                                <div className='text-black flex mt-2' onClick={() => { handleMenu(false) }}>
                                    <RxCross1 />
                                </div>
                            )
                        }
                    </div>
                    {
                        !menu &&
                        <div className='w-[25rem] flex justify-center  h-28 absolute z-10 top-14 bg-slate-100 '>
                            <ul className='flex gap-1 flex-col  absolute -top-2 justify-center text-lg mt-3 w-[7rem] bg-slate-100 '>
                                <NavLink to='/Movy' className='text-gray-900 no-underline hover:no-underline flex hover:text-red-500 active:text-red-700 focus:no-underline justify-center'> <p className='text-black'> Home </p></NavLink>
                                <NavLink to='/favourite' className='text-gray-900 no-underline hover:no-underline hover:text-red-500 active:text-red-700 focus:no-underline flex justify-center'> <p className='text-black'> Favourite </p> </NavLink>

                                {
                                    <NavLink to='/SignUp' className='text-gray-900 no-underline hover:no-underline hover:text-red-500 active:text-red-700 focus:no-underline flex justify-center'> <p className='text-black'> Sign Up </p></NavLink>


                                }
                            </ul>
                        </div>
                    }
                </div>
            }
        </div >
    )
}

export default Navbar
