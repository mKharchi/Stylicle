import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div className='w-full absolute z-50 bg-bg-white shadow-md flex justify-between items-center py-3 px-16'>
      <div className='w-1/2 justify-center items-center '>
        <img src="/logo.png" alt="" width={256} height={256} className='w-30' />
      </div>
      <div className='flex items-center text-lg gap-8 justify-end w-1/2'>
        <NavLink className={"hover:opacity-80"} to="/">Home</NavLink>
        <NavLink className={"hover:opacity-80"} to="/about">About Us</NavLink>
        <NavLink className={"hover:opacity-80"} to="/contact">Contact Us</NavLink>
        
      </div>
    </div>
  )
}

export default Navbar
