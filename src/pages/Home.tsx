import React, { Suspense } from 'react'
import Navbar from '../layouts/Navbar'
import { useFetchAllProducts } from '../services/apis/Products/hooks';
import ProductsList from '../components/Products/ProductsList';
import ProductSlider from '../components/Products/ProductSlider';

const Home = () => {
    const { data: allListedProducts } = useFetchAllProducts();
    return (
        <>
            <Navbar />
            {/* <ProductSlider /> */}
            <Suspense fallback={<div className='flex justify-center items-center'>Loading posts...</div>}>
                <ProductsList productListing={allListedProducts} />
            </Suspense>
        </>
    )
}

export default Home