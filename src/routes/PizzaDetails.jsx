import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Error from "./Erro";

export default function PizzaDetails() {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const res = await fetch(`http://localhost:8080/pizzas/${id}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch pizza');
                }
                const data = await res.json();
                setPizza(data)
            } catch (error) {
                console.error('Error fetching pizza:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData()
    }, [pizza])

    if (!pizza) {
        { if (isLoading) return <div>Loading...</div>; }
        { if (!isLoading) return <Error /> }
    }

    const { name, imgUrl, ingredients, description } = pizza;

    const imgStyle = {
        backgroundImage: `url("${imgUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }

    return (
        <div className="p-5" style={{ width: "30rem" }} >
            <div className="flex justify-start items-center gap-5">
                <Link to={"/"} className="bg-gray-800 p-2 rounded-full text-xs">👈</Link>
                <h2 className="font-bold">{name}</h2>
            </div>
            <br />
            <div style={imgStyle} className="w-full h-60"></div>
            <br />
            <div className="text-xs text-justify">
                <i className="font-semibold">Ingredientes:</i>
                <br />
                <br />
                <ul className="list-outside">
                    {ingredients.map((ing) => (
                        <li key={ing} className="px-3 flex items-center gap-3"><input type="checkbox" className="cursor-pointer" />{ing}</li>
                    ))}
                </ul>

                <br />

                <p>
                    <i className="font-semibold">Descrição: </i>{description}
                </p>
            </div>
        </div>
    )
}