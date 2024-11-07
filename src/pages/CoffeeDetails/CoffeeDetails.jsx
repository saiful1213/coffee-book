import CoffeeCard from "@/components/CoffeeCard/CoffeeCard";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CoffeeDetails = () => {
    const [coffee, setCoffee] = useState({});
    const coffees = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const coffee = coffees.find(coffee => coffee.id === Number(id));
        setCoffee(coffee)
    }, [])

    return (
        <div className="mt-20">
            <CoffeeCard coffee={coffee} coffeeDetails={true} />
        </div>
    )
}

export default CoffeeDetails;