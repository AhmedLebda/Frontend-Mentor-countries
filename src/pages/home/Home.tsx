import CountryCard from "@/components/custom/CountryCard";
import SearchInput from "@/components/custom/SearchInput";
import Filter from "@/components/custom/Filter";
import useHomeData from "./useHomeData";
import CustomAlert from "@/components/custom/CustomAlert";

const Home = () => {
    const {
        countriesToRender,
        error,
        search,
        handleSearchChange,
        filter,
        setFilter,
    } = useHomeData();

    if (error) return <CustomAlert message={error} />;

    if (!countriesToRender.length) {
        return (
            <>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <SearchInput value={search} onChange={handleSearchChange} />

                    <Filter value={filter} onChange={setFilter} />
                </div>

                <CustomAlert
                    message={` Can't find country: ${search.toUpperCase()} in Region:
                    ${filter ? filter.toUpperCase() : "All Regions"}`}
                />
            </>
        );
    }

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <SearchInput value={search} onChange={handleSearchChange} />

                <Filter value={filter} onChange={setFilter} />
            </div>

            <section className="grid gap-6 place-items-center sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 container mx-auto">
                {countriesToRender.map((country) => (
                    <CountryCard
                        key={country.name.common}
                        data={{
                            name: country.name.common,
                            flag: country.flags.png,
                            population: country.population,
                            region: country.region,
                            capital: country.capital,
                        }}
                    />
                ))}
            </section>
        </>
    );
};

export default Home;
