import React, { useState } from 'react'

const ProductsList = ({ productListing }: any) => {
    console.log("------->>>>>>>", productListing)
    return (
        <div className='m-[15px]'
        >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productListing?.map((product: any) => {
                    console.log(product)
                    return (
                        <div className="bg-[#D4D4D4] shadow-lg p-4 rounded-xl">
                            <img
                                src={product.image}
                                className='w-[450px] h-[300px] items-cover rounded-xl'
                            />
                            <div className='mt-[10px]  h-[250px]'>
                                <p className='font-bold mt-[15px]'>Title : </p><p className=''>{product.title}</p>
                                <p className='font-bold mt-[15px]'>Price : </p><p className=''>{product.price} $</p>
                                {/* <p className='font-bold mt-[15px] cursor-pointer max-h-[50px]'>Description : </p><p className=''>{product.description}</p> */}
                                <p className='font-bold mt-[15px]'>Category : </p><p className=''>{product.category}</p>
                            </div >
                            <button
                                className=' p-[10px] w-[100%] text-[22px] rounded-[25px] bg-[white] hover:bg-[#494949] hover:text-[white]'
                            >
                                + Add
                            </button>
                        </div >
                    )
                })
                }
            </div >
        </div >
    )
}

export default ProductsList