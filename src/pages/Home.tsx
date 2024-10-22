import React, { Suspense, useEffect, useRef, useState } from 'react'
import Navbar from '../layouts/Navbar'
import ProductsList from '../components/Products/ProductsList';
import { useMutateGetCategoryResults, useMutateGetSearchResults } from '../services/apis/SearchProducts/hooks';
import CategoryFilter from '../components/Filters/CategoryFilter';
import { CircularProgress } from '@mui/material';
import { debounce } from 'lodash';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('beauty');
    const [listedData, setListedData] = useState<any>([]);
    const handleSearch = (e: any) => {
        setSearchTerm(e.target.value);
    };

    // This section is for serach product using searchbar
    const { mutateAsync: searchResult, isLoading: searchLoading } = useMutateGetSearchResults((data: any) => {
        setListedData(data?.products)
    })
    const debouncedSearchRef = useRef(debounce((term) => {
        searchResult(term);
    }, 300));
    useEffect(() => {
        if (searchTerm) {
            debouncedSearchRef.current(searchTerm);
        }
    }, [searchTerm]);


    // this section is to get the result using category dropdown
    const { mutateAsync: categoryResult, isLoading: categoryLoading } = useMutateGetCategoryResults((data: any) => {
        setListedData(data?.products)
    })
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