import Logo from "../logo/Logo";

export default function Menu() {
    return (
        <nav className=" bg-gray-800 md:w-72 md:h-full w-full h-16 md:fixed text-center md:py-10 flex flex-col justify-center items-center md:justify-between">
            <Logo />
            <small className="text-white hidden md:visible">by <a href="https://github.com/saraferreira10">Sara Ferreira</a></small>
        </nav>
    )
}