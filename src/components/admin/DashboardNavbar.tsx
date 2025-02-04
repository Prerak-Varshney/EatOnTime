'use client';
import { useState } from 'react';

const DashboardNavbar = () => {
    const dashContent: string[] =  ['Dashboard', 'Items', 'Orders', 'Deliveries', "Coupons", "Settings"];
    const [selectedNav, setSelectedNav] = useState('Dashboard');
    return (
       <>
           <div className={`min-w-20 w-20 lg:w-80 h-screen bg-slate-900 flex flex-col items-center justify-start`}>
               <div className={`hidden w-full h-40 lg:flex flex-col items-center justify-center border-b border-slate-700`}>
                   <span className={`font-bold text-2xl text-white`}>Restaurant Name</span>
               </div>

               <nav className={`hidden w-11/12 text-white lg:flex flex-col items-center justify-center mt-10`}>
                   {
                      dashContent.map((item: string) =>
                           <span
                               className={`w-full h-14 flex items-center justify-center border border-transparent hover:bg-slate-800 hover:border-slate-700 font-medium transition-all duration-300 ${selectedNav === item ? 'bg-slate-800 hover:border-transparent' : ''}`}
                               key={item}
                               onClick={() => setSelectedNav(item)}
                           >{item}</span>
                       )
                   }
               </nav>
           </div>
       </>
    )
}
export default DashboardNavbar;