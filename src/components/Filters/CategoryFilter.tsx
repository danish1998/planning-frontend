import React from 'react'

const CategoryFilter = ({ category, setCategory }: any) => {
  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches"
  ];
  return (
    <div className='flex items-center p-[50px]'>
      <p className='text-[22px]'>Categories : </p>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className='border-2 ml-[10px] p-[5px] rounded-md'>
        {categories?.map((category) => {
          return (
            <option value={category}>{category}</option>
          )
        })

        }
      </select>
    </div>
  )
}

export default CategoryFilter
