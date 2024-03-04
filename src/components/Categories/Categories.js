'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);
  
    return (
        <div className='max-w-screen-lg mx-auto my-8'>
            <div className='flex items-center gap-2'>
                <div className='w-1 h-7 bg-primary'></div>
                <h1 className='text-2xl font-medium my-10'>Categories</h1>
            </div>
            <ul className='flex space-x-2'>
                {categories.map(category => (
                    <>
                         <Link href={`/category/${category.category_id}`} type="button" className="group relative h-14 w-48 overflow-hidden border border-primary text-lg text-center text-black hover:text-white"><span className="bg-[#46139f]  ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-primary ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>{category.categoryName}</Link>
                    </>

                ))}
            </ul>
        </div>
    );
};

export default Categories;