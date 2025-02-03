const Navbar = () => {
   return (
       <>
           <div className={`w-80 h-screen bg-slate-900 flex flex-col items-center justify-start`}>
               <div className={`w-full h-40 flex flex-col items-center justify-center`}>
                   <span className={`font-bold text-2xl text-white`}>Restaurant Name</span>
               </div>

               <nav className={`w-11/12 text-white flex flex-col items-center justify-center`}>
                   {
                       ['Dashboard', 'Items', 'Orders', 'Deliveries', "Employees"].map((item) =>
                           <span className={`w-full h-14 flex items-center justify-center hover:bg-slate-800 font-medium transition-all duration-300`} key={item}>{item}</span>
                       )
                   }
               </nav>
           </div>
       </>
   )
}

export default Navbar;