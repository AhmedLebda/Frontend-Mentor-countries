import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/layouts/MainLayout.tsx";
import Home from "./pages/home/Home.tsx";
import CountryDetails from "./pages/details/CountryDetails.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/:countryName", element: <CountryDetails /> },
        ],
    },
]);
function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
