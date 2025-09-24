import React, { useEffect, useState } from 'react'

const Books = ({setCartItems}) => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/books")
        .then((res)=>res.json())
        .then((data)=>setBooks(data))
        .catch(()=>alert("Error API")) 
    }, [])

    const handleAddToCart = (item) => {
      setCartItems((prev) => [...prev, item]);
    };

  return (
    <div className='w-full min-h-auto p-3 mt-3'>
      {/* Header */}
      <div className='flex items-center gap-3 hover:text-blue-700 ps-3'>
        <a href='/books' className='text-2xl md:text-3xl lg:text-4xl font-medium'>
          Books
        </a>
        <svg className='mt-3' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </div>

      {/* Product Grid */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
        {books.map((item) => (
          <div key={item.id} className='w-full h-auto border-2 border-gray-400 rounded-2xl shadow-md hover:shadow-xl hover:scale-95 transition-transform duration-200'>
            <img className='w-90 h-100 rounded-t-2xl m-auto' src={item.img} alt={item.name} />
            
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

export default Books