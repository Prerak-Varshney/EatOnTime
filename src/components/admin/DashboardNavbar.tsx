'use client';
import { useState } from 'react';
import {ClockArrowUp, Diamond, LayoutDashboard, Settings, ShoppingBasket, Truck} from "lucide-react";
import {usePathname} from "next/navigation";
import Link from "next/link";

const DashboardNavbar = () => {
    const pathName: string = usePathname();
    let lastSegment: string | undefined = pathName.split("/").filter(Boolean).pop();

    if (lastSegment) {
        lastSegment = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    } else {
        lastSegment = "/";
    }


    const dashContent: string[] =  ['Dashboard', 'Items', 'Orders', 'Deliveries', "Coupons", "Settings"];
    const dashIcons = [
        { Component: LayoutDashboard, name: "Dashboard" },
        { Component: ShoppingBasket, name: "Basket" },
        { Component: ClockArrowUp, name: "History" },
        { Component: Truck, name: "Truck" },
        { Component: Diamond, name: "Premium" },
        { Component: Settings, name: "Settings" }
    ];

    const [selectedNav, setSelectedNav] = useState(lastSegment);
    return (
       <>
           <div className={`min-w-20 w-20 lg:w-80 h-screen bg-slate-900 flex flex-col items-center justify-start`}>
               <div
                   className={`hidden w-full h-40 lg:flex flex-col items-center justify-center border-b border-slate-700`}>
                   <span className={`font-bold text-2xl text-white`}>Restaurant Name</span>
               </div>

               <nav className={`hidden w-11/12 text-white lg:flex flex-col items-center justify-center mt-10`}>
                   {
                       dashContent.map((item: string) =>

                           <span
                               className={`w-full h-14 flex items-center justify-center border border-transparent hover:bg-slate-800 hover:border-slate-700 font-medium transition-all duration-300 ${selectedNav === item ? 'bg-slate-800 hover:border-transparent' : ''}`}
                               key={item}
                               onClick={() => setSelectedNav(item)}
                           >
                                <Link className={`w-full h-full flex items-center justify-center`} href={`/admin/${item.toLowerCase()}`} key={item}>{item}</Link>

                           </span>

                       )
                   }
               </nav>
               <div className={`h-40`}></div>
               <nav className="w-11/12 text-white lg:hidden flex flex-col items-center justify-center mt-10 gap-4">
                   {dashIcons.map(({Component}, index) => (
                       <Component
                           key={index}
                           className="w-auto h-7 flex items-center justify-center border border-transparent hover:bg-slate-800 hover:border-slate-700 font-medium transition-all duration-300"
                       />
                   ))}
               </nav>

           </div>
       </>
    )
}
export default DashboardNavbar;