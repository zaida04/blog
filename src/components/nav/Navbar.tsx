import { Github } from "lucide-react";

const navbar = {
    home: "/",
    projects: "/#projects",
    competitons: "/#competitions",
    blog: "/#blog",
}

export default function Navbar() {
    return <div className="flex flex-row justify-between p-8">
        <div className="flex flex-row gap-12">
            {Object.keys(navbar).map(key => {
                const destination = navbar[key as keyof typeof navbar];

                return <div>
                    <a className="" href={destination}>{key}</a>
                </div>
            })}
        </div>

        <a href="https://github.com/zaida04" className="flex flex-row gap-2 items-center">
            <Github />
            <p className="text-sm">View on GitHub</p>
        </a>
    </div>
}