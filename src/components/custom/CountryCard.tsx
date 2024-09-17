import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";

interface CountryCardProps {
    data: {
        flag: string;
        name: string;
        population: number;
        region: string;
        capital: string[];
    };
}

const CountryCard = ({ data }: CountryCardProps) => {
    const { flag, name, population, region, capital } = data;
    return (
        <div className="w-full max-w-xs">
            <Link to={name}>
                <Card className="shadow-md dark:bg-darkElement">
                    <CardHeader className="px-0 pt-0">
                        <img
                            src={flag}
                            alt={`Flag of: ${name}`}
                            className=" h-40 object-cover"
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="capitalize mb-4 text-ellipsis overflow-hidden  whitespace-nowrap">
                            {name}
                        </CardTitle>
                        <div className="flex flex-col gap-y-2">
                            <p className="text-base">
                                <span className="font-semibold">
                                    Population:{" "}
                                </span>{" "}
                                {new Intl.NumberFormat().format(population)}
                            </p>
                            <p className="text-base">
                                <span className="font-semibold">Region: </span>{" "}
                                {region}
                            </p>
                            <p className="text-base">
                                <span className="font-semibold">Capital: </span>{" "}
                                {capital}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
};

export default CountryCard;
