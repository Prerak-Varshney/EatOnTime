"use client";
import { useState } from 'react';
import DashboardNavbar from "@/components/admin/DashboardNavbar";

const Header = ({itemDisplayType, setItemDisplayType}) => {
    const [showItemType, setShowItemType] = useState(0);
    function handleChangeItemType(index: number){
        setShowItemType(index)
        setItemDisplayType(index);
    }
    return(
        <div className={`w-full h-20 flex items-center justify-center border-b border-b-neutral-300`}>
            {
                ["All Items", "Create Items"].map((item: string, index: number) =>
                    <button
                        key={index}
                        className={`min-w-40 w-1/2 h-full  border-r border-r-neutral-300 hover:bg-neutral-300 transition-all duration-300 ${showItemType === index ? 'bg-neutral-300' : ''}`}
                        onClick={() => setItemDisplayType(index)}
                    >
                        <span className={`text-base font-medium`}>{item}</span>
                    </button>
                )
            }
        </div>
    )
}

export default Header;