import Dropdown from "@/components/admin/Dropdown";

interface DetailsProps {
    label: string;
    placeholder?: string;
    type?: string;
    dropdownItems?: string[];
    inputType?: string;
    itemValue: string | number;
    setItemValue: (value: any) => void;
}
const Details = ({ label, placeholder, inputType="text", type="input", dropdownItems, itemValue, setItemValue }: DetailsProps) => {
    return(
        <div className={`w-full h-20 pl-10 gap-2 flex items-center justify-start`}>
            <h1 className={`md:text-base text-wrap text-sm`}>{label}</h1>
            {
                type === "dropdown" ?
                    <Dropdown items={dropdownItems ? dropdownItems : []}/>
                :
                <input
                    type={inputType}
                    placeholder={placeholder}
                    className={`w-80 h-8 md:w-96 md:h-10 px-2 outline-none bg-transparent border-b border-b-slate-300 `}
                    value={itemValue}
                    onChange={(e) => setItemValue(e.target.value)}
                />
            }

        </div>
    )
}
export default Details;