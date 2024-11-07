import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import Heading from "@/components/Heading/Heading";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <Banner />
            <Heading title={'Browse Coffees By Category'} subTitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'} />
            <Categories categories={categories} />
            <Outlet />
        </div>
    )
}

export default Home;