import React from 'react'
import Navbar from '../layouts/Navbar'

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className=' p-[20px] bg-[gainsboro]  overflow-y-scroll'>
                <div className='flex flex-col bg-[gainsboro] h-[100vh] rounded-xl'>
                    <div className='flex border-bottom-2 items-center justify-center m-[5px]'>
                        <div className='flex bg-[white] shadow w-[80%] rounded-xl w-[100%] items-center justify-center'>
                            <div className='w-[70%] h-[300px] p-[10px] flex-1'>
                                <img
                                    className='w-[200px] h-[200px] rounded-xl items-cover'
                                    src='https://images.pexels.com/photos/28824456/pexels-photo-28824456/free-photo-of-woman-in-white-shirt-looking-out-from-glass-door.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' />
                                <div className='flex flex-col ml-[10px] mt-[10px]'>
                                    <p className='text-[16px] font-bold'>Title</p>
                                    <p className='text-[16px] font-bold' >Description</p>
                                    <p className='text-[16px] font-bold' >Category</p>
                                </div>
                            </div>
                            <div className='flex-1 flex-col'>
                                <p className='font-bold'>Price</p>
                                <p>100$</p>
                            </div>
                            <div className='flex-1 flex-col'>
                                <p className='font-bold'>Quantity</p>
                                <p>100+</p>
                            </div>
                            <div className='flex-1 flex-col'>
                                <p className='font-bold'>Total</p>
                                <p>1000$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Cart