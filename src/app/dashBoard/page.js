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
            Dashboard main
        </main>
    );
};

export default Dashboard;