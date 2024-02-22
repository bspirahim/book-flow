import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
    const session = await getServerSession();
    if(!session){
        redirect('/')
    }
    return (
        <div>
            <h1>Welcome to Dashboard</h1>
        </div>
    );
};

export default Dashboard;