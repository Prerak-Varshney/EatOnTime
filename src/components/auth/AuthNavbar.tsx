interface AuthNavbarProps {
    type?: "register" | "login";
    setType: (type: "register" | "login") => void;
};
const AuthNavbar = ({type = "register", setType}:AuthNavbarProps  ) => {
    return(
        <div className={`w-full h-20 bg-slate-900 flex items-center justify-between px-20 text-gray-200`}>
            <h1 className={`text-2xl font-bold`}>EatOnTime</h1>
            <div className={`w-auto h-full flex items-center justify-center gap-4`}>
                {
                    ["Register", "Login"].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setType(item.toLowerCase() as "register" | "login")}
                            className={`text-lg font-normal hover:text-gray-400 transition-all duration-300`}
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default AuthNavbar;