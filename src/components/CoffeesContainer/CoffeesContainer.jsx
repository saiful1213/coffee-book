import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const CoffeesContainer = () => {
    const [activeTabData, setActiveTabData] = useState([]);
    const coffees = useLoaderData();
    const { category } = useParams();

    useEffect(() => {
        const filteredData = coffees.filter(coffee => coffee.category === category);
        setActiveTabData(filteredData)
    }, [coffees, category])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {
                activeTabData.length < 1 ?
                    coffees.slice(0, 6).map(coffee => <CoffeeCard coffee={coffee} key={coffee.id} coffeeDetails={false} />) :
                    activeTabData.map(coffee => <CoffeeCard coffee={coffee} key={coffee.id} coffeeDetails={false} />)
            }
        </div>
    )
}

export default CoffeesContainer;