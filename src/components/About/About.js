import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-12'>

            <div className='grid grid-cols-2 gap-4 items-center mt-4'>
                <div className=''>
                    <div className='flex items-center gap-2 mb-5'>
                        <div className='w-1 h-7 bg-primary'></div>
                        <h1 className='text-2xl font-medium'>About Us</h1>
                    </div>
                    <p className='text-md text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et dolor, optio accusamus soluta corrupti, error reprehenderit dicta nesciunt qui labore explicabo aspernatur voluptatum modi repellendus delectus. Hic velit voluptates nostrum, libero odit ullam deserunt eligendi officiis, neque deleniti eveniet amet et? Deserunt, qui cumque ad repellat ullam dolorum quaerat mollitia ea expedita cum vero pariatur doloribus aut laborum fuga assumenda quisquam, magni  </p>
                </div>
                <div className='p-2'>
                    <Image width={500} height={500} src='/banner-2.jpg' alt="card image" className="object-cover w-full rounded" />
                </div>
            </div>
        </div>
    );
};

export default About;