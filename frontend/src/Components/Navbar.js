import React from 'react'
import {Link} from "react-router-dom"
import {toast} from 'react-hot-toast'
import logo from '../images/logo.png'

export const Navbar = (props) => {
    let isLoggedIn= props.isLoggedIn;
    let setISLoggedIn= props.setISLoggedIn;
  return (
    <div className='border-solid border border-red-600 overflow-hidden'>
            <div className="flex  justify-between items-center w-11/12 max-w-[1160px] mx-auto ">
                <div className='  ' >
                    <Link to="/">
                        <img className='h-14 w-40 ' src={logo}  alt='logo' loading='lazy'/>
                    </Link>
                </div>
                <div>
                    <div className='flex'>
                        <ul className='flex gap-6 flex-row text-white mx-[10px]'>
                            <li className=' text-white px-[12px] rounded-[8px]  hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-100'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className=' text-white px-[12px] rounded-[8px] mx-[10px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100'>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                        {!isLoggedIn &&
                        <Link to="/login">
                            <button className=' text-white px-[12px] focus:bg-white focus:text-black rounded-[8px] mx-[10px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100'>
                            Login
                            </button>
                        </Link>
                        }
                        {isLoggedIn &&
                            <Link to="/">
                                <button  onClick={() => {
                                    setISLoggedIn(false);
                                    toast.success("Logged Out");
                                }} className='text-white px-[12px] focus:bg-white focus:text-black rounded-[8px] mx-[10px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100'>
                                Log out
                                </button>
                            </Link>
                        } 
                        {isLoggedIn &&
                            <Link to="/dashboard">
                                <button className='text-white px-[12px] focus:bg-white focus:text-black rounded-[8px] cursor-pointer hover:bg-white hover:text-black transition-all duration-100'>
                                Dashboard
                                </button>
                            </Link>
                        }
                    </div>
                </div>  
            </div>
    </div>
    
    )
}
