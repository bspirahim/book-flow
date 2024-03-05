'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const SingleCategoryPage = ({ params }) => {


    const [categoryBook, setCategoryBook] = useState([]);
    useEffect(() => {
        fetch('/api/books/byCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                category: params.slug
            })
        })
            .then(res => res.json())
            .then(data => setCategoryBook(data))
    }, [])
    console.log(categoryBook);
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className='my-10'>
            {
                categoryBook.map(book => <>
                    <div className="card rounded-none card-side bg-base-100 shadow-xl mb-5">
                        <figure className='p-5'>
                            <Image width={500} height={500} src={book.photo} alt="card image" />
                            </figure>
                        <div className=" w-3/4 p-5 space-y-2">
                            <h2 className="card-title">{book.bookName}</h2>
                            <p><span className='font-bold'>Author:</span> {book.author}</p>
                            <p><span className='font-bold'>Category:</span> {book.category}</p>
                            <p><span className='font-bold'>Price:</span> ${book.price}</p>
                            <div>
                                    <Rating
                                        placeholderRating={book?.rating}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    ></Rating>
                                </div>
                            <p>{book?.details.substring(0, 150)} ...</p>
                        </div>
                    </div>
                </>)
            }
            </div>
        </div>
    );
};

export default SingleCategoryPage;