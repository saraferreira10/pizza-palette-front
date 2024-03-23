import { useEffect, useState } from "react";
import CardPizza from "../components/card/CardPizza";
import { loader } from "../dados";

export default function Catalog() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        async function getPizzas() {
            const dados = await loader();
            setPizzas(() => dados);
        }

        getPizzas();
    }, []);

    return (
        <div className="text-center md:text-justify ">
            <h2 className="text-xl font-bold">Cardápio Online</h2>
            <br />
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">

                {pizzas ? (
                    pizzas.map((pizza) => (
                        <CardPizza pizza={pizza} key={pizza.id} />
                    ))
                ) : (
                    <em>sem pizzas :(</em>
                )}

            </div>
        </div>
    )
}