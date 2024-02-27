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
        <main>     
        <p className='text-center text-2xl'> Welcome to {session?.user.name}</p>
        </main>
    );
};

export default Dashboard;