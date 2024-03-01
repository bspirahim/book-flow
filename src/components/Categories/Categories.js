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
    console.log(categories);
    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <h1>Categories</h1>
            <ul className='flex space-x-2'>
                {categories.map(category => (
                    <Link
                     href={`/category/${category.category_id}`} className='border-2 border-primary p-1 cursor-pointer hover:bg-primary duration-300 hover:text-white rounded-md' key="{category.category_id}">{category.categoryName}</Link>
                ))}
            </ul>
        </div>
    );
};

export default Categories;