import React from 'react'
import CartImage from "../Images/icons8-cart-50.png"
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { cartState } from '../recoil/atoms/cartQuantity';

const Navbar = ({ searchTerm, onSearch }: any) => {

  const Navigate = useNavigate();

  
  const [cart, setCart] = useRecoilState(cartState);
  return (
    <div className='flex justify-between items-center h-[60px] bg-[#F4F9F9]'>
      <div
        onClick={() => Navigate('/Home')}
        className='flex-1 ml-[10px] font-bold text-[22px] cursor-pointer'
      >Danish Store</div>
      <div className='flex-1'>
        <div className="flex items-center justify-center focus:outline-none p-4">
          <input
            type="text"
            value={searchTerm}
            onChange={onSearch}
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
          <div className='flex  curson-pointer items-center justify-center bg-[gray] absolute w-[20px] h-[20px] text-white rounded-[50px] top-[5px] right-[25px]'>
            {cart.length}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar