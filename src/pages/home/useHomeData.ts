import { OutletContext } from "@/types";
import { useCallback, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";

const useHomeData = () => {
    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<string>("");
    const { countries, error } = useOutletContext<OutletContext>();
    const MaxResults = 8;

    // Filter countries based on the selected filter
    const filteredCountries = useMemo(() => {
        return (
            countries.filter(
                (country) =>
                    (country.name.common.toLowerCase() !== "israel" &&
                        !filter) ||
                    filter === "all" ||
                    country.region.toLowerCase() === filter.toLowerCase()
            ) || []
        );
    }, [countries, filter]);

    // Calculate random index for default display
    const getRandomIndex = (length: number) =>
        Math.floor(Math.random() * Math.max(length - MaxResults, 1));
    const randomIndex = useMemo(
        () => getRandomIndex(filteredCountries.length),
        [filteredCountries]
    );

    const defaultCountries = useMemo(
        () => filteredCountries.slice(randomIndex, randomIndex + MaxResults),
        [filteredCountries, randomIndex]
    );

    // Get the final list of countries to render based on search
    const countriesToRender = useMemo(() => {
        return search
            ? filteredCountries
                  .filter((country) =>
                      country.name.common
                          .toLowerCase()
                          .includes(search.toLowerCase())
                  )
                  .slice(0, MaxResults)
            : defaultCountries;
    }, [search, filteredCountries, defaultCountries]);

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
        },
        []
    );

    return {
        countriesToRender,
        error,
        search,
        handleSearchChange,
        filter,
        setFilter,
    };
};

export default useHomeData;
