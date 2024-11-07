import CoffeesContainer from "@/components/CoffeesContainer/CoffeesContainer";
import MainLayout from "@/layout/MainLayout";
import CoffeeDetails from "@/pages/CoffeeDetails/CoffeeDetails";
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
                element: <Home />,
                loader: () => fetch('/categories.json'),
                children: [
                    {
                        path: '/',
                        loader: () => fetch('/coffees.json'),
                        element: <CoffeesContainer />
                    },
                    {
                        path: '/categories/:category',
                        loader: () => fetch('/coffees.json'),
                        element: <CoffeesContainer />
                    }
                ]
            },
            {
                path: '/coffees',
                element: <Coffees />,
                loader: () => fetch('/coffees.json')
            },
            {
                path: '/coffeeDetails/:id',
                element: <CoffeeDetails />,
                loader: () => fetch('/coffees.json')
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
])

export default Routes;