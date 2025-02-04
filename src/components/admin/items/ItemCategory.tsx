import Image from "next/image";
const ItemCategory: any = ({titleOfCategory, imageOfCategory}: any): any => {
    return(
        <div className={`w-80 h-96 flex flex-col items-center justify-start border bg-slate-200 rounded-3xl hover:scale-105 transition-all duration-300`}>
            <div className={`w-full h-80`}>
                <Image src={imageOfCategory} alt={"Vegetarian"} objectFit={`cover`} className={`rounded-t-3xl w-full h-full`}/>
            </div>
            <span className={`w-full flex items-center justify-center h-[calc(384px-320px)] text-black text-2xl font-normal rounded-b-3xl`}>{titleOfCategory}</span>
        </div>
    )
}
export default ItemCategory;