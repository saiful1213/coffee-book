import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { Button } from "../ui/button";

const CoffeesContainer = () => {
    const [activeTabData, setActiveTabData] = useState([]);
    const coffees = useLoaderData();
    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (category) {
            const filteredData = [...coffees].filter(coffee => coffee.category === category);
            setActiveTabData(filteredData)
        }
        else {
            setActiveTabData(coffees.slice(0, 6));
        }
    }, [coffees, category])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    activeTabData.map(coffee => <CoffeeCard coffee={coffee} key={coffee.id} coffeeDetails={false} />)
                }
            </div>
            {
                activeTabData.length === 6 ? <Button onClick={() => navigate(`/coffees`)} variant="destructive" size="lg" className="mb-6">View All</Button> : ''
            }
        </>
    )
}

export default CoffeesContainer;