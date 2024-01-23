import { Github, Menu } from "lucide-react";
import { useState } from "react";

const navbar = {
    home: "/",
    projects: "/#projects",
    competitons: "/#competitions",
    blog: "/#blog",
}

export default function Navbar() {
    const [show, setShow] = useState(false);

    return <div className="flex flex-row justify-between md:block md:p-8 p-4">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <div className="flex flex-col md:flex-row gap-2 md:gap-12">
                {Object.keys(navbar).map(key => {
                    const destination = navbar[key as keyof typeof navbar];

                    return <div>
                        <a className="text-base" href={destination}>{key}</a>
                    </div>
                })}
            </div>

            <a href="https://github.com/zaida04" className="flex flex-row gap-2 items-center">
                <Github />
                <p className="text-sm">View on GitHub</p>
            </a>
        </div>

        <div className="md:hidden">
            <Menu size={40} />
        </div>
    </div>
}