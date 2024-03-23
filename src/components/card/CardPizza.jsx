import { Link } from "react-router-dom";

export default function CardPizza({ pizza }) {

    const imgStyle = {
        backgroundImage: `url('${pizza.imgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }
    return (
        <div className="w-40">
            <div style={imgStyle} className="bg-blue-100 h-28 w-full"></div>
            <Link to={`/pizzas/${pizza.id}`} className="text-xs text-gray-800 font-extralight">{pizza.name}</Link>
        </div>
    )
}