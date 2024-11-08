import CoffeeCard from "@/components/CoffeeCard/CoffeeCard";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Coffees = () => {
    const coffees = useLoaderData();
    const [sortCoffees, setSortCoffees] = useState(coffees);

    const handleSort = sortBy => {
        if (sortBy === 'popularity') {
            const sortedCoffee = [...coffees].sort((a, b) => b.popularity - a.popularity);
            setSortCoffees(sortedCoffee);
        }
        else {
            const sortedCoffee = [...coffees].sort((a, b) => b.rating - a.rating);
            setSortCoffees(sortedCoffee);
        }
    }

    return (
        <>
            <div className="mt-12 flex justify-between items-center">
                <h1 className="text-4xl font-thin flex items-center gap-2">Sort Coffee's by Popularity & Rating <span><ArrowBigRight /></span></h1>
                <div className="flex gap-3">
                    <Button className="bg-green-500" onClick={() => handleSort('popularity')}>Sort by Popularity</Button>
                    <Button className="bg-green-500" onClick={() => handleSort('rating')}>Sort by Rating</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    sortCoffees.map((coffee, idx) => <CoffeeCard coffee={coffee} key={idx} />)
                }
            </div>
        </>
    )
}

export default Coffees;