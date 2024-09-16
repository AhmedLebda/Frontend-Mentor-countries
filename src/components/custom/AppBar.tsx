import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeProvider";

const AppBar = () => {
    const { theme, setTheme } = useTheme();
    console.log(theme);
    return (
        <header className="px-6 py-8 shadow-md flex justify-between items-center relative z-10">
            <Link to={"/"}>
                <h1 className="font-bold text-sm md:text-xl lg:text-2xl">
                    where in the world?
                </h1>
            </Link>
            <Button
                variant={"ghost"}
                className="capitalize text-sm md:text-base "
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? (
                    <Sun className="mr-2" />
                ) : (
                    <Moon className=" mr-2 " />
                )}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
        </header>
    );
};

export default AppBar;
