import CoffeeCard from "@/components/CoffeeCard/CoffeeCard";
import Heading from "@/components/Heading/Heading";
import { getFavourite, removeFavourite } from "@/utils";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        const favourites = getFavourite();
        setCoffees(favourites);
    }, [])

    const handleRemove = id => {
        removeFavourite(id);
        const favourites = getFavourite();
        setCoffees(favourites);
    }

    return (
        <>
            <Heading title={'Welcome to Dashboard'} subTitle={'Manage coffees that you have previously added as favourite. You can view or remove them form here.'}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                    coffees.map(coffee => <CoffeeCard handleRemove={handleRemove} coffee={coffee} key={coffee.id} />)
                }
            </div>
        </>
    )
}

export default Dashboard;