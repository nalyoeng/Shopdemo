import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = ({cartCount, setIsCartOpen}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className='w-full min-h-[10vh] h-[13vh] bg-gray-200 flex items-center justify-between px-4 lg:px-9 relative'>
        
        {/* Logo */}
        <img src="/img/logo.png" alt="logo" className='lg:w-[130px] lg:h-[130px] w-[100px]' />

        {/* Desktop Menu */}
        <ul className='hidden md:flex lg:flex gap-5 lg:gap-15 lg:text-3xl text-2xl text-gray-800 font-serif'>
          <li><a href="/homepage" className='hover:text-blue-400'>Home</a></li>
          <li><a href="/skincare" className='hover:text-blue-400'>Skincare</a></li>
          <li><a href="/devices" className='hover:text-blue-400'>Devices</a></li>
          <li><a href="/books" className='hover:text-blue-400'>Books</a></li>
        </ul>

        {/* Search Bar (always visible) */}
        <div className='flex lg:w-[300px] w-[200px] border-gray-500 border-2 rounded-2xl px-3 items-center mr-3'>
          <input 
            className='w-full h-9 outline-0 placeholder:text-[18px]' 
            type="text" 
            placeholder='search' 
          />
          <svg xmlns="http://www.w3.org/2000/svg" className='ml-2' width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </div>
        
        <div onClick={() => setIsCartOpen(true)} className='relative w-10 h-10 flex items-center justify-center cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-0.5 bg-red-500 text-white text-sm rounded-full px-2">
              {cartCount}
            </span>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setOpen(!open)} 
          className='lg:hidden md:hidden mr-3'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>
      </header>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='w-40 h-[220px] bg-gray-200 absolute top-[10vh] right-0 lg:hidden md:hidden border-2 border-gray-300 shadow-md'
          >
            <ul className='flex flex-col gap-5 text-xl font-medium text-black p-3'>
              <li><a href="/homepage" className='hover:text-gray-600'>Home</a></li>
              <li><a href="/skincare" className='hover:text-gray-600'>Skincare</a></li>
              <li><a href="/devices" className='hover:text-gray-600'>Devices</a></li>
              <li><a href="/books" className='hover:text-gray-600'>Books</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header
