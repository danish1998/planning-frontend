import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { cartState } from '../../recoil/atoms/cartQuantity';
import toast from 'react-hot-toast';

const ProductsList = ({ productListing }: any) => {
    const [cart, setCart] = useRecoilState<any>(cartState);

    const addToCart = (product: any) => {
        setCart([...cart, { ...product, quantity: 1 }]);
        toast.success("Item added into the cart successfully")
    };

    const isInCart = (productId: any) => {
        return cart.some((item: any) => item.id === productId);
    };

    return (
        <div className='m-[0px]'
        >
            <div className="grid grid-cols-2 p-[10px]  md:grid-cols-3 lg:grid-cols-4 gap-4">

                {productListing?.length > 0 ? productListing?.map((product: any) => {
                    return (
                        <div className=" border shadow-lg p-4 rounded-xl bg-[#F4F9F9] ">
                            <img
                                src={product?.images[0] && product.images[0]}
                                className='w-[450px] h-[300px] object-contain rounded-xl'
                            />
                            <div className='mt-[10px]  h-[250px]'>
                                <p className='font-bold mt-[15px]'>Title : </p><p className=' border-b-2'>{product.title}</p>
                                <p className='font-bold mt-[15px]'>Price : </p><p className=' border-b-2'>{product.price} $</p>
                                <p className='font-bold mt-[15px]'>Category : </p><p className=' border-b-2'>{product.category}</p>
                            </div >
                            <button
                                onClick={() => addToCart(product)}
                                disabled={isInCart(product.id)}
                                className=' p-[8px] w-[100%] text-[18px] rounded-[8px] bg-[gainsboro] hover:bg-[#494949] hover:text-[white]'
                            >
                                {isInCart(product.id) ? "Added" : "+ Add to Cart"}
                            </button>
                        </div >
                    )
                })
                    :
                    (<div className='w-[100vw] h-[80vh] flex justify-center items-center text-[24px]'>No Data Found</div>)
                }
            </div >
        </div >
    )
}

export default ProductsList