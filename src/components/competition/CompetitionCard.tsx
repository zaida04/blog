import Reef from "../../static/imgs/reef.png";

export interface CompetitionProps {
    name: string;
    placement: number | string;
    track?: string;
    date: string;
}

export default function CompetitionCard(props: CompetitionProps) {
    return <div className="flex flex-col items-center gap-2 w-48 h-56 py-4 px-2 border-2 border-slate-800 rounded-xl">
        <div className="relative w-44 h-44">
            <img
                alt="Placement reef"
                className="absolute object-cover top-0 left-0 -z-1 w-full h-full"
                src={Reef.src}
                width={200}
                height={200}
            />
            <p
                className={`absolute ${typeof props.placement === "string" ? "text-2xl w-[1rem] top-[35%] left-[35%]" : "text-6xl top-[25%] left-[40%] "} font-bold`}
            >
                {props.placement}
            </p>
        </div>

        <div className="flex flex-col items-center">
            <p className="text-lg text-white">{props.name}</p>
            {props.track && <p className="text-sm text-gray-500">{props.track}</p>}
            <p className="text-xs text-gray-500">{props.date}</p>
        </div>
    </div>
}