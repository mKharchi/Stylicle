import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div className='w-full absolute z-50 bg-bg-white shadow-md flex justify-between items-center py-2 px-16'>
      <div className='w-1/2 justify-center items-center '>
        <img src="/logo.png" alt="" width={256} height={256} className='w-28 h-8' />
      </div>
      <div className='flex items-center text-sm gap-8 justify-end w-1/2'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <div className='flex items-center gap-4'>
          <NavLink to="/login" className='border font-semibold px-4 py-2 rounded-md'>Login</NavLink>
          <NavLink to="/signup" className='bg-dark font-semibold text-white px-4 py-2 rounded-md'>Sign Up</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
