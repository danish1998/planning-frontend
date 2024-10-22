import React, { Suspense, useEffect, useState } from 'react'
import Navbar from '../layouts/Navbar'
import ProductsList from '../components/Products/ProductsList';
import ProductSlider from '../components/Products/ProductSlider';
import { useMutateGetCategoryResults, useMutateGetSearchResults } from '../services/apis/SearchProducts/hooks';
import CategoryFilter from '../components/Filters/CategoryFilter';
import { CircularProgress } from '@mui/material';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('beauty');
    const [listedData, setListedData] = useState<any>([]);
    const handleSearch = (e: any) => {
        setSearchTerm(e.target.value);
    };

    const { mutateAsync: searchResult, isLoading: searchLoading } = useMutateGetSearchResults((data: any) => {
        setListedData(data?.products)
    })

    const { mutateAsync: categoryResult, isLoading: categoryLoading } = useMutateGetCategoryResults((data: any) => {
        console.log("first", data)
        setListedData(data?.products)
    })

    useEffect(() => {
        searchResult(searchTerm)
    }, [searchTerm])

    useEffect(() => {
        categoryResult(category)
    }, [category])

    return (
        <>
            <Navbar searchTerm={searchTerm} onSearch={handleSearch} />
            <CategoryFilter category={category} setCategory={setCategory} />
            <Suspense fallback={<div className='flex justify-center items-center'>Loading products...</div>}>
                {searchLoading || categoryLoading ? (
                    <div className="flex items-center justify-center">
                        <CircularProgress />
                    </div>
                ) : (
                    <ProductsList productListing={listedData} />
                )}
            </Suspense>
        </>
    )
}

export default Home