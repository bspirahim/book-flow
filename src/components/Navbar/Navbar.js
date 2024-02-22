'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => {
    const {data: session } = useSession()
    return (
        <div className='bg-primary shadow-xl drop-shadow-md'>
            <div className="navbar z-10 text-white max-w-screen-lg mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='mx-2' href='/'>Home</Link>
                            <Link className='mx-2' href='allBook'>All Book</Link>
                            <Link className='mx-2' href='addBook'>Add Book</Link>
                        </ul>
                    </div>
                    <a className="text-xl font-bold cursor-pointer">BookFlow</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-md">
                        <Link className='mx-2' href='/'>Home</Link>
                        <Link className='mx-2' href='allBook'>All Book</Link>
                        <Link className='mx-2' href='addBook'>Add Book</Link>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    {!session ? (
                        <>
                            <Link className='border-2 px-2 py-1 rounded-md' href='login'>Login</Link>
                        </>
                    ) : (
                        <>
                            <div className='border-2 p-2 rounded-full' ><FaRegUser className='text-xl' /></div>
                            <button onClick={() => { signOut() }} className='border-2 px-2 py-1 rounded-md'>Log Out</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;