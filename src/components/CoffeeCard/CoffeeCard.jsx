import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom";


const CoffeeCard = ({ coffee, coffeeDetails }) => {
    const { id, name, image, category, ingredients, origin, nutrition_info, type, description, making_process, rating, popularity } = coffee || {};

    const navigate = useNavigate();

    return (
        <Card className={coffeeDetails && 'flex justify-between mt-20'} onClick={() => navigate(`/coffeeDetails/${id}`)}>
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
                <p>Rating: {rating}</p>
            </CardContent>
        </Card>

    )
}

export default CoffeeCard;