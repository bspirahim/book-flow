'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const [error, setError] = useState('');
    const { push } = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            if (res.status === 400) {
                setError('This email is Already registered');
            } if (res.status === 200) {
                setError('');
                push('/login');
            }
        } catch (error) {
            setError('Error, try again');
            console.log(error);
        }
    }
    return (
        <div className="bg-center bg-cover h-[100vh] bg-no-repeat object-fill"
            style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("/login-4.jpg")' }}
        >
            <div className="hero min-h-screen">
                <div className="hero-content border border-primary rounded-xl flex-col lg:flex-row-reverse">

                    <div className="card  w-80 max-w-sm shadow-2xl">
                        <h1 className='font-bold text-center text-2xl text-black pt-2'>Sign Up</h1>
                        <form className="card-body" onSubmit={handleSubmit}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Name</span>
                                </label>
                                <div className='flex relative'>
                                    <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full rounded-full " required />
                                    <FaUser className='absolute right-3 bottom-4 ' />
                                </div>

                            </div>
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
                                <button className="btn btn-primary rounded-full">Sign Up</button>
                            </div>
                            <p className='text-red-700 text-xl my-2'>{error && error}</p>
                            <p className='text-center'>Already Register?<Link className='text-primary' href='login'> Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;