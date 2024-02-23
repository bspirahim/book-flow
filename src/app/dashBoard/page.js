'use client';
import React from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const {data: session} = useSession();
    if(!session){
        redirect('/')
    }
    return (
        <div>
            <h1 className='font-bold text-2xl text-center my-5'>Welcome to {session?.user.name}</h1>   
        </div>
    );
};

export default Dashboard;