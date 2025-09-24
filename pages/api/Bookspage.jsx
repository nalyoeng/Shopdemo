import React, { useEffect, useState } from 'react'

const Bookspage = ({setCartItems}) => {
  const [books,setBooks]=useState([]);
      useEffect(()=>{
          fetch("http://localhost:3000/bookspage")
          .then((res)=>res.json())
          .then((data)=>setBooks(data))
          .catch(()=>alert("Error API")) 
      }, [])

      const handleAddToCart = (item) => {
        setCartItems((prev) => [...prev, item]);
      };

    return (
      <div className='w-full min-h-auto p-3 mt-25'>
        <div className='w-full flex justify-center gap-4 content-center items-center'>
            <svg className='mt-3' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
            </svg>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-medium text-center'>
                Books
            </h1>
            <svg className='mt-3' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
            </svg>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
          {books.map((item) => (
            <div key={item.id} className='w-full h-auto border-2 border-gray-400 rounded-2xl shadow-md hover:shadow-xl hover:scale-95 transition-transform duration-200'>
              <img className='w-85 h-100 m-auto' src={item.img} alt={item.name} />
              
              <div className='p-3'>
                <h1 className='text-lg md:text-xl font-semibold'>{item.name}</h1>
                <p className='text-base md:text-lg mt-2 text-gray-700'>${item.price}</p>
                <p className='text-sm md:text-base mt-1 text-gray-600'>{item.description}</p>
              </div>
              
              <div className='p-3 w-full'>
                  <button onClick={() =>handleAddToCart(item)} className='flex justify-center items-center gap-2 w-full bg-blue-700 px-3 py-2 rounded-md text-white hover:bg-blue-900 transition'>
                      Add To Cart
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                      </svg>
                  </button>
              </div>
  
            </div>
          ))}
        </div>
      </div>
    )
}

export default Bookspage