'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Rating from 'react-rating';

import { FaRegStar, FaStar } from 'react-icons/fa';

const AllBookPage = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        fetch('Category.json')
            .then(res => res.json())
            .then(data => setBook(data))

    }, [])
    return (
        <div className='max-w-screen-lg mx-auto my-16'>

            <div className='grid md:grid-cols-4 gap-10'>
                {
                    book.map(bk =>
                        <>
                        <div className="card w-full bg-base-100 drop-shadow-2xl shadow-inner shadow-gray-400">
                            <figure className="shadow-inner shadow-gray-400 ">
                                <Image width={100} height={100}  src={bk?.image} alt="card image" className="object-cover h-44 w-full" />
                            </figure>
                            <div className="card-body p-0 items-center text-center">
                                <h2 className="card-title font-bold mt-4">{bk?.category}</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p className='font-bold'>$</p>
                                <div>
                                    <Rating
                                        placeholderRating={5}
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