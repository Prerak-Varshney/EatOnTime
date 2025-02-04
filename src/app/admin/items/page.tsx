"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

import DashboardNavbar from "@/components/admin/DashboardNavbar";
import Header from "@/components/admin/items/Header";
import ItemCategory from "@/components/admin/items/ItemCategory";
import Details from "@/components/admin/items/Details";
import productCategories from "@/Constants/productCategories";

import { usePathname } from "next/navigation";
import Link from 'next/link';
import {X} from "lucide-react";


const Items: any = () => {
    const pathName = usePathname();

    const [showItemType, setShowItemType] = useState('showItem');

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productType, setProductType] = useState([]);
    const [productCategoriesName, setProductCategoriesName] = useState([]);
    const [productStock, setProductStock] = useState([]);
    const [productRecommended, setProductRecommended] = useState([]);
    const [productPrice, setProductPrice] = useState(0);
    const [productDiscount, setProductDiscount] = useState(0);
    const [productFinalPrice, setProductFinalPrice] = useState(0);

    useEffect(() => {
        setProductFinalPrice(productPrice - (productPrice * productDiscount / 100));
    }, [productPrice, productDiscount])

    function handleSubmit() {
        console.log(productName, productDescription, productType, productCategoriesName, productStock, productRecommended, productPrice, productDiscount, productFinalPrice);
    }

    return(
        <div className={`w-full flex items-center justify-center`}>
            <div className={`w-20 lg:w-80`}>
                <DashboardNavbar />
            </div>
            <div className={`flex-1 min-h-screen`}>
                <div className={`w-full h-20`}>
                    <Header itemDisplayType={showItemType} setItemDisplayType={setShowItemType}/>
                </div>
                {
                    showItemType === 'showItem' ?
                    (
                        <div className={`w-full h-[calc(100vh-5rem)] flex items-center justify-evenly`}>

                        </div>
                    )
                    :
                    (
                        <div className={`w-full min-h-[calc(100vh-5rem)] overflow-x-hidden overflow-y-scroll`}>
                            <div className={`w-full h-[calc(100vh-5rem)] flex flex-col items-left justify-start text-black`}>
                                <Details label={"Name:"} placeholder={"Rajma Chawal"} itemValue={productName} setItemValue={setProductName} />
                                <Details label={"Description:"} placeholder={"Spicy and Delicious"} itemValue={productDescription} setItemValue={setProductDescription} />

                                <Details label={"Type:"} type={'dropdown'} dropdownItems={["Veg", "Non-Veg"]} itemValue={productType} setItemValue={setProductType} />
                                <Details label={"Categories:"} type={'dropdown'} dropdownItems={productCategories} itemValue={productCategoriesName} setItemValue={setProductCategoriesName} dropdownType={"single"} />

                                {
                                    productCategoriesName.length > 0 &&
                                    <div className={`w-[30rem] min-h-20 pl-10 gap-2 flex flex-wrap items-center justify-start font-semibold`}>
                                        {
                                            productCategoriesName.map((item: string, index: number) =>
                                                <div key={index} className={`bg-slate-900 text-white px-2 py-1 rounded-lg relative`}>
                                                    <span>{item}</span>
                                                    <div
                                                        className={`absolute -top-1 -right-1 cursor-pointer rounded-full w-3 h-3 bg-black flex items-center justify-center`}
                                                        onClick={() => {
                                                            let temp: string[] = [...productCategoriesName];
                                                            temp.splice(index, 1);
                                                            setProductCategoriesName(temp);
                                                        }}
                                                    >
                                                        <X size={16} strokeWidth={3} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                }

                                <Details label={"Stock:"} type={'dropdown'} dropdownItems={['Yes', "No"]} itemValue={productStock} setItemValue={setProductStock}/>
                                <Details label={"Recommended:"} type={'dropdown'} dropdownItems={['Yes', "No"]} itemValue={productRecommended} setItemValue={setProductRecommended}/>

                                <Details label={"Price:"} inputType={"number"} placeholder={"₹100"} itemValue={productPrice} setItemValue={setProductPrice} />
                                <Details label={"Discount:"} inputType={"number"} placeholder={"20%"} itemValue={productDiscount} setItemValue={setProductDiscount} />

                                <div className={`w-full h-20 pl-10 gap-2 flex items-center justify-start font-semibold`}>
                                    <span>Final Price:</span>
                                    <span>₹{productFinalPrice}</span>
                                </div>

                                <button
                                    className={`w-96 h-10 bg-slate-900 hover:bg-slate-800 rounded-xl self-center text-white transition-all duration-300`}
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Items;