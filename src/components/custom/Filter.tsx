import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

interface FilterProps {
    value: string;
    // onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ value, onChange }: FilterProps) => {
    return (
        <Select defaultValue={value} onValueChange={onChange}>
            <SelectTrigger className="w-[180px] py-6 mb-8  dark:bg-darkElement">
                <SelectValue placeholder="Filter by region" />
            </SelectTrigger>
            <SelectContent className=" dark:bg-darkElement">
                <SelectGroup>
                    <SelectLabel>Regions</SelectLabel>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                    <SelectItem value="americas">Americas</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="oceania">Oceania</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default Filter;
