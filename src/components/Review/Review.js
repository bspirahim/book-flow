'use client'
import Image from 'next/image';
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Review = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="card w-auto bg-base-100 text-center border border-primary pt-5 shadow-md">
                    <p className='px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias voluptatibus mollitia, minima dolorum reiciendis neque corporis soluta porro iusto.</p>
                    <div className="card-body items-center text-center">
                        <div>
                            <Rating
                                placeholderRating={5}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            ></Rating>
                        </div>
                        <figure className="">
                            <Image width={50} height={50} src="/review/player-1.png" alt="Shoes" className="rounded-xl" />

                        </figure>
                        <div className="card-actions">
                            <p className='font-bold'>Jhon Smith</p>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    );
};

export default Review;