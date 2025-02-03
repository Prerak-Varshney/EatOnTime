"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardNavbar from "@/components/admin/DashboardNavbar";
import Header from "@/components/admin/items/Header";

const Items: any = () => {
    const [showItemType, setShowItemType] = useState('showItem');

    useEffect(() => {
        console.log(showItemType);
    }, [showItemType])

    return(
        <div className={`w-full flex items-center justify-center overflow-x-hidden`}>
            <div className={`w-20 md:w-80`}>
                <DashboardNavbar />
            </div>
            <div className={`flex-1 min-h-screen`}>
                <Header itemDisplayType={showItemType} setItemDisplayType={setShowItemType} />
            </div>
        </div>
    )
}

export default Items;