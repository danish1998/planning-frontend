import React from 'react'
import CartImage from "../Images/icons8-cart-50.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const Navigate = useNavigate()
  return (
    <div className='flex justify-between items-center h-[60px] bg-[red]'>
      <div className='flex-1 ml-[10px]'>Danish Store</div>
      <div className='flex-1'>
        <div className="flex items-center justify-center focus:outline-none p-4">
          <input
            type="text"
            value={""}
            // onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="border border-gray-300 rounded-l-md p-2 w-[100%] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            // onClick={handleSearch}
            className="bg-blue-500 text-white focus:outline-none rounded-r-md p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </div>
      <div className='flex-1 '>
        <div
          className='ml-[85%] relative curson-pointer'
          onClick={() => Navigate('/Cart')}
        >
          <img
            className=' curson-pointer'
            src={CartImage} />
          <div className='flex  curson-pointer items-center justify-center absolute w-[20px] h-[20px] bg-white rounded-[50px] top-[5px] right-[25px]'>
            1
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar