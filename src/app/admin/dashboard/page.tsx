'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardNavbar from "@/components/admin/DashboardNavbar";

const Dashboard = () => {
    return (
        <div className={`w-full flex items-center justify-center`}>
            <div className={`w-20 md:w-80`}>
                <DashboardNavbar/>
            </div>
            <div className={`flex-1 h-screen`}>

            </div>
        </div>
    )
}

export default Dashboard;