import CoffeeCard from "@/components/CoffeeCard/CoffeeCard";
import { useLoaderData } from "react-router-dom";

const Coffees = () => {
    const coffees = useLoaderData();

    return (
        <div>
            <h1 className='text-2xl font-bold'>Coffees </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    coffees.map(coffee => <CoffeeCard coffee={coffee}/>)
                }
            </div>
        </div>
    )
}

export default Coffees;