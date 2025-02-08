'use client';
import { useState } from "react";

// import Register from "@/components/admin/auth/Register";
// import Login from "@/components/admin/auth/Login";

//<Register />
//<Login />

import Details from "@/components/admin/Details";
import IndianStatesAndUTs from "@/Constants/IndianStateList";
import AuthNavbar from "@/components/admin/auth/AuthNavbar";

const Auth = () => {
    const [restaurantName, setRestaurantName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<number>();
    const [country, setCountry] = useState<string>("India");
    const [state, setState] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [postalCode, setPostalCode] = useState<number>();
    const [address, setAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [authType, setAuthType] = useState<"register" | "login">("register");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        setRestaurantName(restaurantName.trim());
        setEmail(email.trim());
        setCity(city.trim());
        setAddress(address.trim());
        setPassword(password.trim());
        setConfirmPassword(confirmPassword.trim());

        if(restaurantName === "" || email === "" || !phone || state === "" || city === "" || !postalCode || address === "" || password === "" || confirmPassword === ""){
            alert("Please fill all the fields")
            setIsLoading(false);
        }

        if(password !== confirmPassword){
            alert("Passwords do not match");
            setIsLoading(false);
        }
    };

    return(
        <div>
            <AuthNavbar type={authType} setType={setAuthType} />
            <form
                onSubmit={handleSubmit}
                className={`w-full flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]`}
            >
                <span className={`text-3xl font-bold h-20 w-full flex items-center justify-center`}>{authType === 'register' ? "Register" : "Login"}</span>
                {
                    authType === "register" ?
                        <div className={`w-1/2 h-auto flex flex-col items-start justify-start`}>
                            <Details
                                label={"Restaurant Name:"}
                                placeholder={"Pinch of Spice"}
                                itemValue={restaurantName}
                                setItemValue={setRestaurantName}
                            />
                            <Details
                                label={"Email:"}
                                placeholder={"john@gmail.com"}
                                itemValue={email}
                                setItemValue={setEmail}
                                inputType={'email'}
                            />
                            <Details
                                label={"Phone:"}
                                placeholder={"1234XXXXXX"}
                                itemValue={phone}
                                setItemValue={setPhone}
                                inputType={'number'}
                            />
                            <Details
                                label={"Country:"}
                                placeholder={"India"}
                                itemValue={country}
                                setItemValue={setCountry}
                                isInputDisabled={true}
                            />
                            <Details
                                label={"State:"}
                                type={"dropdown"}
                                dropdownItems={IndianStatesAndUTs}
                                itemValue={state}
                                setItemValue={setState}
                            />
                            <Details
                                label={"City:"}
                                placeholder={"New Delhi"}
                                itemValue={city}
                                setItemValue={setCity}
                            />
                            <Details
                                label={"Postal Code:"}
                                placeholder={"110001"}
                                itemValue={postalCode}
                                setItemValue={setPostalCode}
                                inputType={'number'}
                            />
                            <Details
                                label={"Address:"}
                                placeholder={"123, ABC Street, XYZ Colony"}
                                itemValue={address}
                                setItemValue={setAddress}/>
                            <Details
                                label={"Password:"}
                                placeholder={"password"}
                                itemValue={password}
                                setItemValue={setPassword}
                                inputType={'password'}
                            />
                            <Details
                                label={"Confirm Password:"}
                                placeholder={"Confirm Password"}
                                itemValue={confirmPassword}
                                setItemValue={setConfirmPassword}
                                inputType={'password'}
                            />
                    </div>
                    :
                    <div className={`w-1/2 h-auto flex flex-col items-start justify-start`}>
                        <Details
                            label={"Username:"}
                            placeholder={"Email or Phone"}
                            itemValue={restaurantName}
                            setItemValue={setRestaurantName}
                        />
                        <Details
                            label={"Password:"}
                            placeholder={"password"}
                            itemValue={password}
                            setItemValue={setPassword}
                            inputType={'password'}
                        />
                    </div>
                }
                <div className={`w-full h-20 flex justify-center items-center`}>
                    <button
                        type={'submit'}
                        className={`w-80 h-10 bg-slate-900 text-white rounded-3xl transition-all duration-300 hover:bg-slate-800`}
                    >
                        {isLoading ? "Please Wait..." : authType === "register" ? "Register" : "Login"}
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Auth;