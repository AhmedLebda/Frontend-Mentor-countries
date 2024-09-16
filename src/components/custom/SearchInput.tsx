import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
    return (
        <div className=" relative mb-8 flex-1">
            <Input
                type="search"
                placeholder="Search for a country"
                className="py-6 pl-10 pr-4 dark:bg-darkElement"
                value={value}
                onChange={onChange}
                autoFocus
            />

            <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            />
        </div>
    );
};

export default SearchInput;
