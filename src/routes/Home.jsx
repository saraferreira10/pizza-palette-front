import { Outlet } from "react-router-dom";
import Menu from "../components/menu/Menu";

export default function Home() {

    return (
        <div className="h-screen">
            <Menu />

            <div className="w-full h-fit flex justify-center items-center md:w-fit md: flex-wrap md:block md:absolute md:left-96 md:py-10">
                <Outlet />
            </div>
        </div>
    )
}