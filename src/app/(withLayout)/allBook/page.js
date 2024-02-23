'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const AllBookPage = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('/api/books')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])
    return (
        <div className='max-w-screen-lg mx-auto my-12'>

            <div className='grid md:grid-cols-4 gap-10'>
                {
                    books.map(book =>
                        <>
                        <div className="card w-full bg-base-100 drop-shadow-2xl shadow-inner shadow-gray-400">
                            <figure className="shadow-inner shadow-gray-400 ">
                                <Image width={100} height={100}  src={book?.photo} alt="card image" className="object-cover h-44 w-full" />
                            </figure>
                            <div className="card-body p-0 items-center text-center">
                                <h2 className="card-title font-bold mt-4">{book?.bookName}</h2>
                                <p>{book?.author}</p>
                                <p className='font-bold'>${book.price}</p>
                                <div>
                                    <Rating
                                        placeholderRating={book?.rating}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    ></Rating>
                                </div>
                                <div className="card-actions   w-full ">
                                    <Link href="" className="w-full p-1 uppercase bg-primary rounded-b-md mt-5 text-white hover:bg-[#2cb38a]">View details</Link>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                }
            </div>



        </div>
    );
};

export default AllBookPage;