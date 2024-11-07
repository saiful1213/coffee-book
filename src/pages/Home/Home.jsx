import Banner from "@/components/Banner/Banner";
import Heading from "@/components/Heading/Heading";

const Home = () => {
    return (
        <div>
            <Banner />
            <Heading title={'Browse Coffees By Category'} subTitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'}/>
        </div>
    )
}

export default Home;