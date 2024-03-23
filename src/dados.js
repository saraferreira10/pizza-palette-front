export async function loader() {
    try {
        const res = await fetch('http://localhost:8080/pizzas');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Erro ao carregar pizzas:", error);
    }

}
