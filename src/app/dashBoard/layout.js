'use client'

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    const { data: session } = useSession();
    return (
        <div className="flex h-screen overflow-hidden">
            <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#1C2434] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full">
                <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                    <Link className=" flex items-center justify-center text-2xl gap-1 my-4 font-semibold text-primary" href='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Book Flow
                    </Link>
                </div>
                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                    <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
                        <div className="">
                            <ul className="mb-6 flex flex-col gap-1.5">
                                <ul className="menu  text-white w-56 rounded-box">
                                    <li className="text-white duration-200 ease-in-out rounded-md ">
                                        <Link className="font-normal text-lg text-white" href='/dashBoard/home'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="hover:bg-gray-300 hover:text-black duration-200 ease-in-out rounded-md">
                                        <Link href='/dashBoard/addBook' className="font-normal text-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Add Book
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/dashBoard/myBook' className="font-normal text-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                            My Book
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='' className="font-normal text-lg">
                                            <svg xlink="http://www.w3.org/1999/xlink" className="fill-current h-5 w-5" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z" fill="#DEE4EE" />
                                                <path d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z" fill="#DEE4EE" />
                                            </svg>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='' className="font-normal text-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                            Log Out
                                        </Link>
                                    </li>
                                </ul>

                            </ul>
                        </div>
                    </nav>
                </div>

            </aside>
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* header in dashboard */}
                <header className="sticky top-0 z-999  w-full bg-white drop-shadow-lg shadow-lg py-5 dark:bg-boxdark dark:drop-shadow-none">
                    <div className="flex justify-between items-center px-5">
                        <div className="">
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <p className="font-medium text-lg">{session?.user.name}</p>
                            </div>
                            <div className="avatar online">
                                <div className="w-10 border-2 border-primary rounded-full">
                                    <Image width={50} height={50} src="https://i.ibb.co/HHh4ktR/user.jpg" alt="profile image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="mx-auto w-full p-5">
                {children}
                </main>

            </div>
        </div>
    );
}