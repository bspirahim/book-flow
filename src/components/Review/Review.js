'use client'
import Image from 'next/image';
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Review = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <div className='flex items-center gap-2'>
                <div className='w-1 h-7 bg-primary'></div>
                <h1 className='text-2xl font-medium my-10'>Our Client Says</h1>
            </div>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className='grid md:grid-cols-4 gap-3'>
                    <SwiperSlide>
                        <div className="card rounded-none w-auto text-center  pt-5 shadow-md bg-[#F5F5F5]">
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card rounded-none w-auto text-center  pt-5 shadow-md bg-[#F5F5F5]">
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card rounded-none w-auto text-center  pt-5 shadow-md bg-[#F5F5F5]">
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card rounded-none w-auto text-center  pt-5 shadow-md bg-[#F5F5F5]">
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card rounded-none w-auto text-center  pt-5 shadow-md bg-[#F5F5F5]">
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
                    </SwiperSlide>
                    </div>
                </Swiper>
            </>

        </div>
    );
};

export default Review;