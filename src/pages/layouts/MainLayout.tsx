import { Outlet } from "react-router-dom";
import AppBar from "@/components/custom/AppBar";
import { useEffect, useState } from "react";
import { Country } from "@/types";

const MainLayout = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(
                    "https://restcountries.com/v3.1/all"
                );
                if (!response.ok) throw new Error("Network response error");
                const data = await response.json();
                setCountries(data);
            } catch {
                setError("Failed to fetch countries. Please try again later.");
            }
        };
        fetchCountries();
    }, []);

    return (
        <div className="flex flex-col min-h-screen font-mono text-lightText dark:bg-darkElement dark:text-darkText">
            <AppBar />
            <main className="px-6 py-8 bg-lightBg dark:bg-darkBg  flex-1">
                <Outlet context={{ countries, error }} />
            </main>
        </div>
    );
};

export default MainLayout;
