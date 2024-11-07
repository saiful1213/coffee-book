import MainLayout from "@/layout/MainLayout";
import Coffees from "@/pages/Coffees/Coffees";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/coffees',
                element: <Coffees />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
])

export default Routes;