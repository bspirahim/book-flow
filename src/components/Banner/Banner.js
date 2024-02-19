import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-center bg-cover h-[520px] bg-no-repeat object-fill"
            style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("/banner-2.jpg")' }}
        >
            <div className='text-white md:w-2/4 absolute md:top-1/4 md:left-1/4 text-center h-screen md:text-3xl lh-1'>
                <p className='mb-7 md:leading-10'>Unlock worlds of knowledge and inspiration. Dive into the magic of books with our library. Empower your mind, one page at a time. <span className='text-primary'>Happy reading!</span></p>
                <button className='btn btn-primary text-lg text-white rounden-none'>Get More</button>
            </div>
        </div>
    );
};

export default Banner;