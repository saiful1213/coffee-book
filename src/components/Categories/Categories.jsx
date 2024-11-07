import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {

    return (
        <div className="my-12">
            <Tabs>
                <TabsList className="flex w-max mx-auto">
                    {
                        categories.map(category => <Link key={category.id} to={`/categories/${category.category}`}><TabsTrigger value={category.category} className="hover:text-foreground">{category.category}</TabsTrigger></Link>)
                    }
                </TabsList>
            </Tabs>
        </div>
    )
}

export default Categories;