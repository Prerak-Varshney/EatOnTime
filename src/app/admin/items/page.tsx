"use client";

import {useState, useEffect} from 'react';
import Image from "next/image";
import {X} from "lucide-react";

import { postProductDetails } from "@/api/admin/api";

import DashboardNavbar from "@/components/admin/DashboardNavbar";
import Header from "@/components/admin/items/Header";
import Details from "@/components/admin/Details";
import productCategories from "@/Constants/productCategories";
import defaultImage from "../../../../public/default.webp";

const Items = () => {
    const [showItemType, setShowItemType] = useState('showItem');
    const [isLoading, setIsLoading] = useState(false);

    const [mainImage, setMainImage] = useState<File | null>();
    const [image1, setImage1] = useState<File | null>();
    const [image2, setImage2] = useState<File | null>();
    const [image3, setImage3] = useState<File | null>();
    const [image4, setImage4] = useState<File | null>();

    const [productName, setProductName] = useState<string>('');
    const [productDescription, setProductDescription] = useState<string>('');
    const [productType, setProductType] = useState<string[]>([]);
    const [productCategoriesName, setProductCategoriesName] = useState<string[]>([]);
    const [productStock, setProductStock] = useState<string[]>([]);
    const [productRecommended, setProductRecommended] = useState<string[]>([]);
    const [productPreparationTime, setProductPreparationTime] = useState<number>(30);
    const [productPrice, setProductPrice] = useState<number>(0);
    const [productDiscount, setProductDiscount] = useState<number>(0);
    const [productFinalPrice, setProductFinalPrice] = useState<number>(0);

    useEffect(() => {
        setProductFinalPrice(productPrice - (productPrice * productDiscount / 100));
    }, [productPrice, productDiscount])

    async function handleSubmit(e: any): Promise<void> {
        e.preventDefault();
        setIsLoading(true);
        setProductName(productName.trim());
        setProductDescription(productDescription.trim());
        setProductType(productType.map((item: string) => item.trim()));
        setProductCategoriesName(productCategoriesName.map((item: string) => item.trim()));
        setProductStock(productStock.map((item: string) => item.trim()));
        setProductRecommended(productRecommended.map((item: string) => item.trim()));

        console.log(productDiscount, productPrice);

        if(productName ===  "" || productDescription === "" || productType.length === 0 || productCategoriesName.length === 0 || productStock.length === 0 || productRecommended.length === 0 || productPrice < 0 || productDiscount < 0  || productPreparationTime < 0){
            console.log("All fields required");
            setIsLoading(false);
            return;
        }

        const productStockToBoolean: boolean = productStock[0] === 'Yes';
        const productRecommendedToBoolean: boolean = productRecommended[0] === 'Yes';

        const formData: any = new FormData();
        formData.append('restaurantId', '679e433c9303c6e6036bda16');
        formData.append('mainImage', mainImage as Blob);
        formData.append('image1', image1 as Blob);
        formData.append('image2', image2 as Blob);
        formData.append('image3', image3 as Blob);
        formData.append('image4', image4 as Blob);
        formData.append('name', String(productName));
        formData.append('description',String(productDescription));
        formData.append('itemType', String(productType[0]));
        formData.append('category', productCategoriesName);
        formData.append('availability', productStockToBoolean);
        formData.append('isRecommended', productRecommendedToBoolean);
        formData.append('estimatedPreparationTime', productPreparationTime);
        formData.append('price', productPrice);
        formData.append('discount', productDiscount);

        try{
            const response = await postProductDetails(formData);
            console.log(response);

        }catch (error: any){
            if(error.response){
                console.log(error.response.data);
            }else{
                console.log(error);
            }

        }
        setMainImage(null)
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setProductName('');
        setProductDescription('');
        setProductType([]);
        setProductCategoriesName([]);
        setProductStock([]);
        setProductRecommended([]);
        setProductPreparationTime(30);
        setProductPrice(0);
        setProductDiscount(0);
        setProductFinalPrice(0);
        setIsLoading(false);
    }

    return(
        <div className={`w-full flex items-center justify-center`}>
            <div className={`w-20 lg:w-80`}>
                <DashboardNavbar />
            </div>
            <div className={`flex-1 h-screen overflow-y-scroll`}>
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
                        <form onSubmit={handleSubmit} className={`w-full min-h-[calc(100vh-5rem)] flex flex-col items-left justify-start text-black overflow-x-hidden overflow-y-scroll`}>
                            <div className={`w-full flex flex-col md:flex-row items-start justify-between font-semibold rounded-xl`}>
                                <div className={`min-w-72 md:w-96 flex flex-col items-center justify-center`}>
                                    {
                                        [
                                            {imageName: "Main Image", setImageValue: setMainImage },
                                            {imageName: "Image 1", setImageValue: setImage1 },
                                            {imageName: "Image 2", setImageValue: setImage2 },
                                            {imageName: "Image 3", setImageValue: setImage3 },
                                            {imageName: "Image 4", setImageValue: setImage4 }
                                        ].map((item, index: number) =>
                                            <div
                                                key={index}
                                                className={`w-full h-20 ml-10 flex items-center justify-center relative font-semibold rounded-xl bg-slate-300 hover:bg-gray-300 transition-all duration-300 mt-4`}
                                            >
                                                <span className={`absolute`}>{item.imageName}</span>
                                                <input
                                                    type={"file"}
                                                    className={`w-full h-full opacity-0`}
                                                    accept={"image/*"}
                                                    onChange={(e) => item.setImageValue(e.target.files?.[0])}
                                                />
                                            </div>
                                        )
                                    }
                                </div>


                                <Image
                                    src={mainImage ? URL.createObjectURL(mainImage) : defaultImage}
                                    alt={""}
                                    width={0}
                                    height={0}
                                    className={`mt-10 md:mt-0 w-72 h-72 md:w-96 md:h-96 border resize-none border-black self-center mx-10 cover rounded-xl`}
                                />
                            </div>
                            <Details
                                label={"Name:"}
                                placeholder={"Rajma Chawal"}
                                itemValue={productName}
                                setItemValue={setProductName}
                            />
                            <Details
                                label={"Description:"}
                                placeholder={"Spicy and Delicious"}
                                itemValue={productDescription}
                                setItemValue={setProductDescription}
                            />

                            <Details
                                label={"Type:"}
                                type={'dropdown'}
                                dropdownItems={["Veg", "Non-Veg"]}
                                itemValue={productType}
                                setItemValue={setProductType}
                            />
                            <Details
                                label={"Categories:"}
                                type={'dropdown'}
                                dropdownItems={productCategories}
                                itemValue={productCategoriesName}
                                setItemValue={setProductCategoriesName}
                                dropdownType={"single"}
                            />

                            {
                                productCategoriesName.length > 0 &&
                                <div
                                    className={`w-[30rem] min-h-20 pl-10 gap-2 flex flex-wrap items-center justify-start font-semibold`}>
                                    {
                                        productCategoriesName.map((item: string, index: number) =>
                                            <div
                                                key={index}
                                                className={`bg-slate-900 text-white px-2 py-1 rounded-lg relative`}
                                            >
                                                <span>{item}</span>
                                                <div
                                                    className={`absolute -top-1 -right-1 cursor-pointer rounded-full w-3 h-3 bg-black flex items-center justify-center`}
                                                    onClick={() => {
                                                        setProductCategoriesName(prevCategories => prevCategories.filter((_, i) => i !== index));
                                                    }}
                                                >
                                                    <X size={16} strokeWidth={3}/>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            }

                            <Details
                                label={"Stock:"}
                                type={'dropdown'}
                                dropdownItems={['Yes', "No"]}
                                itemValue={productStock}
                                setItemValue={setProductStock}
                            />

                            <Details
                                label={"Recommended:"}
                                type={'dropdown'}
                                dropdownItems={['Yes', "No"]}
                                itemValue={productRecommended}
                                setItemValue={setProductRecommended}
                            />

                            <Details
                                label={"Preparation Time:"}
                                placeholder={"30 mins"}
                                itemValue={productPreparationTime}
                                setItemValue={setProductPreparationTime}
                            />

                            <Details
                                label={"Price:"}
                                inputType={"number"}
                                placeholder={"₹100"}
                                itemValue={productPrice}
                                setItemValue={setProductPrice}

                            />
                            <Details
                                label={"Discount:"}
                                inputType={"number"}
                                placeholder={"20%"}
                                itemValue={productDiscount}
                                setItemValue={setProductDiscount}
                            />

                            <div
                                className={`w-full h-20 pl-10 gap-2 flex items-center justify-start font-semibold`}>
                                <span>Final Price:</span>
                                <span>₹{productFinalPrice}</span>
                            </div>

                            <div className={`w-full h-20 pl-10 flex items-center justify-start font-semibold`}>
                                <button
                                    type={'submit'}
                                    className={
                                        `min-w-60 w-72 md:w-96 h-10 rounded-xl text-white transition-all duration-300
                                        ${isLoading ? 'bg-slate-500' : 'bg-slate-900 hover:bg-slate-800'}`
                                    }
                                    disabled={isLoading}
                                    // onClick={handleSubmit}
                                >
                                    {isLoading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    )
                }
                        </div>
                    </div>
                    )
                }

                export default Items;