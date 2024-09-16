export interface Country {
    name: {
        common: string;
        official: string;
    };
    flags: {
        png: string;
    };
    population: number;
    region: string;
    subregion: string;
    capital: string[];
    currencies: { [key: string]: { name: string; symbol: string } };
    languages: { [key: string]: string };
    tld: string[] | null;
    borders: string[] | null;
    cca3: string;
}

export interface OutletContext {
    countries: Country[];
    error: string | null;
}
