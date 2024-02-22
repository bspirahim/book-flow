'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';


const LoginPage = () => {
    const [error, setError] = useState('');
    const router = useRouter();
    const session = useSession();

    useEffect(()=>{
        if(session?.status === 'authenticated'){
            router.replace('/dashBoard')
        }
    }, [session, router])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        const res = await signIn('credentials', {
            redirect: false,
            email,
            password
        })

        if(res?.error){
            setError('Invalid email or password');
            if(res?.url) router.replace('/dashBoard');
        }else{
            setError('');
        }


    };

    return (
        <div className="bg-center bg-cover h-[100vh] bg-no-repeat object-fill"
            style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/login-4.jpg")' }}
        >
            <div className="hero min-h-screen">
                <div className="hero-content border border-primary rounded-xl flex-col lg:flex-row-reverse">

                    <div className="card  w-full max-w-sm shadow-2xl">
                        <h1 className='font-bold text-center text-2xl text-black pt-2'>Login</h1>
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <div className='flex relative'>
                                    <input type="text" name='email' placeholder="Type here" className="input input-bordered w-full rounded-full z-2" required />
                                    <MdEmail className='absolute right-3 bottom-4 ' />
                                </div>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <div className='flex relative'>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered w-full rounded-full" required />
                                    <FaLock className='absolute right-3 bottom-4 ' />
                                </div>
                                <label className="label">
                                    <p className='cursor-pointer'>Show Password</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-full">Login</button>
                            </div>
                            <p className='text-red-600'>{error && error}</p>
                            <p className='text-center'>Not a member?<Link className='text-primary' href='register'> Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;