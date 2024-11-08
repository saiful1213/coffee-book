import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { addFavourite } from "@/utils";
import { useState } from "react";
import { Trash2 } from "lucide-react";


const CoffeeCard = ({ coffee, coffeeDetails, handleRemove }) => {
    const { id, name, image, category, ingredients, description, rating, popularity } = coffee || {};
    
    const [disable, setDisable] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleFavourite = coffee => {
        addFavourite(coffee);
        setDisable(true);
    }

    return (
        <div className={`${pathname === "/dashboard" && 'relative'}`}>
            <Card className={`${coffeeDetails && 'flex justify-between mt-20'}`} onClick={() => navigate(`/coffeeDetails/${id}`)}>
                <CardHeader>
                    <img src={image} alt={`${name} image`} className="h-56 rounded-tr-lg rounded-tl-lg mb-4" />
                </CardHeader>
                <CardContent>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <p className="mb-4"><span className="text-lg font-medium">Category:</span> <span className="text-muted-foreground">{category}</span></p>
                    <ul>
                        <span className="text-lg font-medium">ingredients:</span>
                        {ingredients?.map((ingredient, idx) => <li key={idx} className="text-muted-foreground list-disc list-inside">{ingredient}</li>)}
                    </ul>
                    <div className="flex justify-between items-center mt-6">
                        <p>Rating: {rating}</p>
                        <p>Popularity: {popularity}</p>
                    </div>
                    {
                        coffeeDetails && <Button className="mt-12" variant="destructive"
                            onClick={() => handleFavourite(coffee)} disabled={disable}>Add Favourite</Button>
                    }
                </CardContent>
            </Card>
            {
                pathname === "/dashboard" && <Button onClick={() => handleRemove(coffee.id)}
                    className="absolute -right-5 -top-5" size="icon" variant="destructive"><Trash2 /></Button>
            }
        </div>
    )
}

export default CoffeeCard;