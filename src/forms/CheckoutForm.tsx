import React from 'react'
import toast from 'react-hot-toast'
import { useRecoilState } from 'recoil';
import { cartState } from '../recoil/atoms/cartQuantity';

const CheckoutForm = () => {
  const [cart, setCart] = useRecoilState<any>(cartState);
  return (
    <>
      <div className='flex flex-col justify-center '>
        <input
          type='text'
          className='p-[10px] rounded-md shadow w-[100%]'
          placeholder='apply coupon' />
        <div>
          <p className='text-[22px] p-[10px]'>Subtotal</p>
          <p className='text-[22px] p-[10px]'>Total</p>
          <p className='text-[22px] p-[10px]'>Shipping Charges</p>
          <p className='text-[22px] p-[10px]'>Coupon Applied</p>
        </div>
        <div className='w-[100%]'>
          <button
            onClick={() => {
              toast.success("You have successfully checkout")
              setCart([])
            }}
            className='w-[100%] bg-[blue] text-white p-[10px] rounded-md'>
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}

export default CheckoutForm