'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [books, setBooks] = useState()
    useEffect(() => {
        fetch('/api/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books);
    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <div className='flex items-center gap-2'>
                <div className='w-1 h-7 bg-primary'></div>
                <h1 className='text-2xl font-medium my-10'>Books</h1>
            </div>
            <div className='grid md:grid-cols-4 gap-6'>

                {
                    books?.slice(0, 8).map(book =>
                        <>
                            <div className="card bg-gray-100 shadow-md drop-shadow-sm p-0 rounded-none">
                                <figure className=" w-full h-[250px]  bg-primary">
                                    <Image width={200} height={150} src={book.photo} alt="book image" className="object-cover shadow-md object-center" />
                                </figure>
                                <div className="card-body items-center text-center p-2 bg-[#F5F5F5]">
                                    <h2 className=" text-md font-medium">{book.bookName}</h2>
                                    <p className='text-md py-1'>{book.author}</p>
                                </div>
                            </div>
                        </>
                    )
                }



            </div>
        </div>
    );
};

export default Products;