import CustomAlert from "@/components/custom/CustomAlert";
import { Button } from "@/components/ui/button";
import { OutletContext } from "@/types";
import { MoveLeft } from "lucide-react";
import { Link, useOutletContext, useParams } from "react-router-dom";

const CountryDetails = () => {
    const { countries, error } = useOutletContext<OutletContext>();

    const { countryName } = useParams();

    const country = countries.find(
        (country) =>
            country.name.common === countryName || country.cca3 === countryName
    );
    console.log(country);
    console.log();
    // console.log(country?.languages);
    if (error) return <CustomAlert message={error} />;

    if (!country) {
        return (
            <>
                <CustomAlert message={` Can't find country: ${countryName}`} />
            </>
        );
    }
    return (
        <>
            <Link to={"../"}>
                <Button variant={"outline"} className="dark:bg-darkElement">
                    <MoveLeft size={20} className="mr-2" />
                    <span className="text-base">Back</span>
                </Button>
            </Link>

            <section className="grid grid-cols-1 lg:grid-cols-3 p-10 gap-8 xl:gap-12 font-mono">
                <div className="mb-4 lg:mb-0">
                    <img
                        src={country.flags.png}
                        alt={`Flag of: ${country.name.common}`}
                        className="w-full max-w-lg h-full max-h-lg"
                    />
                </div>

                <div className="flex flex-col gap-2 flex-1 lg:text-lg">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 underline underline-offset-4  ">
                        {country.name.common}
                    </h2>
                    <p>
                        <span className="font-semibold">Native Name: </span>{" "}
                        {country.name.official}
                    </p>
                    <p>
                        <span className="font-semibold">Population: </span>{" "}
                        {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="font-semibold">Region: </span>{" "}
                        {country.region}
                    </p>
                    <p>
                        <span className="font-semibold">Sub Region: </span>{" "}
                        {country.subregion}
                    </p>
                    <p>
                        <span className="font-semibold">Capital: </span>{" "}
                        {country.capital
                            ? country.capital.join(", ")
                            : "unknown"}
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1 lg:mt-16 lg:text-lg">
                    <p>
                        <span className="font-semibold">
                            Top Level Domain:{" "}
                        </span>{" "}
                        {country.tld ? country.tld.join(", ") : "No tld data"}
                    </p>
                    <p>
                        <span className="font-semibold">Currencies: </span>{" "}
                        {Object.values(country.currencies)
                            .map((country) => country.name)
                            .join(",")}
                    </p>
                    <p>
                        <span className="font-semibold">Languages: </span>{" "}
                        {Object.values(country.languages).join(",")}
                    </p>
                </div>

                <div className="lg:col-start-2 lg:col-span-2 flex items-center flex-wrap gap-4">
                    <p className="font-semibold">Border Countries:</p>
                    <div className=" flex items-center flex-wrap gap-4">
                        {country.borders ? (
                            country.borders.map((c) =>
                                c.toLowerCase() !== "isr" ? (
                                    <Link
                                        to={`/${c}`}
                                        className="py-1 px-6 border border-gray-400 rounded-sm hover:bg-slate-300 dark:hover:bg-gray-900"
                                    >
                                        {c}
                                    </Link>
                                ) : null
                            )
                        ) : (
                            <pre>No Borders Data</pre>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CountryDetails;
