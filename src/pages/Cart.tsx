import React from 'react'
import Navbar from '../layouts/Navbar'
import { useRecoilState } from 'recoil';
import { cartState } from '../recoil/atoms/cartQuantity';
import CheckoutForm from '../forms/CheckoutForm';

const Cart = () => {
    const [cart, setCart] = useRecoilState<any>(cartState);
    const updateQuantity = (id: any, value: any) => {
        setCart(cart.map((item: any) =>
            item.id === id && item.quantity + value >= 1
                ? { ...item, quantity: item.quantity + value }
                : item
        ));
    };

    const removeProduct = (id: any) => {
        setCart(cart.filter((item: any) => item.id !== id));
    };


    return (
        <>
            <Navbar />
            <div className=' p-[20px]'>
                <div className='flex'>
                    <div className='flex-1 flex-col rounded-xl'>
                        {
                            cart?.map((items: any) => {
                                const quantity = 1;
                                return (
                                    <div className='flex border-bottom-2 m-[5px]'>
                                        <div className='flex border-2 shadow rounded-xl w-[95%] items-center justify-center'>
                                            <div className='w-[70%] h-[200px] p-[10px] flex-1'>
                                                <img
                                                    className='w-[150px] h-[150px] object-contain rounded-xl items-cover'
                                                    src={items?.images[0]} />
                                            </div>
                                            <div className='flex flex-col ml-[10px] mt-[10px] mr-[30px]'>
                                                <p className='text-[16px]  w-[200px] font-bold'>Title : {items?.title}</p>
                                                <b />
                                                <p className='text-[16px] mt-[10px] w-[200px] font-bold' >Category : {items?.category}</p>
                                            </div>
                                            <div className='flex-1 flex-col'>
                                                <p className='font-bold'>Price</p>
                                                <p className='font-bold'>{items?.price}$</p>
                                            </div>
                                            <div className='flex-1 flex-col'>
                                                <p className='font-bold ml-[15%]'>Quantity</p>
                                                <div className='flex'>
                                                    <button onClick={() => updateQuantity(items.id, -1)} className='flex p-[4px] rounded-lg border-4 h-[30px] justify-center text-[22px] items-center w-[30px] mr-[10px]'>-</button>
                                                    <p className='font-bold'>{items?.quantity > 0 ? items?.quantity : 1}</p>
                                                    <button onClick={() => updateQuantity(items.id, 1)} className='flex p-[4px] rounded-lg border-4 h-[30px] items-center justify-center text-[22px]  w-[30px] ml-[10px]'>+</button>
                                                </div>
                                            </div>
                                            <div className='flex-1 flex-col'>
                                                <p className='font-bold'>Total</p>
                                                <p className='font-bold'>{(items?.price * items?.quantity).toFixed(2)}$</p>
                                            </div>
                                            <button onClick={() => removeProduct(items.id)} className='p-[5px] border-2 rounded-lg mr-[10px]'>Remove</button>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>
                    <div className='flex-4 w-[500px] bg-[#F4F9F9] shadow-lg h-[100%] p-[50px] justify-center items-center rounded-xl'>
                        <CheckoutForm />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Cart