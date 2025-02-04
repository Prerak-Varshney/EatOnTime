'use client';
import { useState, useEffect } from 'react';
import {ChevronDown} from "lucide-react";

interface DropDownProps {
    items: string[];
    itemValue: string[];
    setItemValue: (value: string[]) => void;
    dropdownType?: "single" | "multiple";
}

const DropDown = ({ items, itemValue, setItemValue, dropdownType = "single" }: DropDownProps) => {

    const [itemsList, setItemsList] = useState(items);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Choose');

    function handleDropdownButtonClicked(): void{
        setIsDropdownOpen((prev: boolean): boolean => !prev);
    }

    function handleDropdownItemClicked(item: string): void{
        setSelectedItem(item);
        setIsDropdownOpen(false);
        if(dropdownType == "single"){
            setItemValue([item]);
        }else{

        }

        let temp: string[] = itemValue.length > 0 ? [...itemValue] : [];
        temp.push(item);
        setItemValue(temp);

        return;
    }

    return(
        <div className={`w-60 relative`}>
            <div
                className={`w-full h-10 bg-slate-300 hover:bg-gray-300 transition-all duration-300  rounded-lg flex items-center justify-between px-4`}
                onClick={handleDropdownButtonClicked}
            >
                <span>{selectedItem}</span>
                <ChevronDown size={20} />
            </div>
            <div className={
                `w-full absolute flex flex-col items-center justify-start rounded-lg max-h-80 overflow-y-scroll bg-slate-200 transition-all duration-300 z-10 mt-1  
                ${isDropdownOpen ? `h-auto` : 'h-0'}`
            }>
                {
                    itemsList.map((item: string, index: number) =>
                        <div
                            key={index}
                            className={
                                `w-full items-center flex justify-center hover:bg-slate-300 transition-all duration-300 
                                ${isDropdownOpen ? 'min-h-10 border-b border-b-slate-300' : 'h-0'} 
                                ${index === 0 ? 'rounded-t-lg' : index === itemsList.length - 1 ? 'rounded-b-lg border-b-transparent' : ''}`
                            }
                            onClick={() => handleDropdownItemClicked(item)}
                        >
                            <span className={`${isDropdownOpen ? 'flex' : 'hidden'}`}>{item}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DropDown;