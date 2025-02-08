import Dropdown from "@/components/admin/Dropdown";

interface DetailsProps {
    label: string;
    placeholder?: string;
    type?: "input" | "dropdown";
    dropdownItems?: string[];
    inputType?: string;
    itemValue: any | any[];
    setItemValue: (value: any) => void;
    dropdownType?: "single" | "multiple";
    isInputDisabled?: boolean;
}
const Details = ({ label, placeholder, inputType="text", type="input", dropdownItems, itemValue, setItemValue, dropdownType = "single", isInputDisabled=false }: DetailsProps) => {
    return(
        <div className={`w-full h-20 pl-10 gap-2 flex items-center justify-start`}>
            <h1 className={`md:text-base text-wrap text-sm`}>{label}</h1>
            {
                type === "dropdown" ?
                    <Dropdown items={dropdownItems ? dropdownItems : []} itemValue={itemValue} setItemValue={setItemValue} dropdownType={dropdownType}/>
                :
                <input
                    type={inputType}
                    placeholder={placeholder}
                    className={`min-w-60 h-8 w-80 md:w-96 md:h-10 px-2 outline-none bg-transparent border-b border-b-slate-300 `}
                    value={itemValue}
                    onChange={(e) => setItemValue(e.target.value)}
                    disabled={isInputDisabled}
                />
            }

        </div>
    )
}
export default Details;