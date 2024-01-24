import { Github, Menu } from "lucide-react";
import { useState } from "react";

const navbar = {
    home: "/",
    projects: "/#projects",
    competitons: "/#competitions",
    blog: "/#blog",
}
const navbarLabels = Object.keys(navbar);

function NavbarLinks() {
    return <>
        <div className="flex flex-col md:flex-row gap-2 md:gap-12">
            {navbarLabels.map(key => {
                const destination = navbar[key as keyof typeof navbar];

                return <div key={key}>
                    <a className="text-base" href={destination}>{key}</a>
                </div>
            })}
        </div>

        <a href="https://github.com/zaida04" className="flex flex-row gap-2 items-center">
            <Github />
            <p className="text-sm">View on GitHub</p>
        </a>
    </>
}

export default function Navbar() {
    const [show, setShow] = useState(false);

    return <div className="flex flex-row justify-end md:justify-between md:block md:p-8 p-4">
        <div className="hidden md:flex flex-col gap-4 md:flex-row md:justify-between">
            <NavbarLinks />
        </div>

        <div className="md:hidden absolute right-8">
            <Menu onClick={() => setShow(!show)} size={40} />
        </div>

        {show && <div className="flex flex-col w-full gap-4 animate-in slide-in-from-top duration-500 ">
            <NavbarLinks />
        </div>}
    </div>
}