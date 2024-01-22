import { Github, Link } from "lucide-react";

export interface ProjectProps {
    title: string;
    statistics?: Record<string, string> | string;
    description: string;
    tags: string[];
    links: {
        github?: string;
        website?: string;
    };
}
export default function ProjectCard(props: ProjectProps) {
    return (
        <div className="flex flex-col h-fit w-fit gap-3 px-6 py-4 border-2 rounded-2xl border-slate-800/50">
            <div>
                <p className="text-2xl font-bold text-white">{props.title}</p>
                {props.statistics &&
                    (typeof props.statistics === "object" ? (
                        <div className="flex flex-row gap-2 text-amber-500">
                            {Object.entries(props.statistics).map(([stat, value], index) => (
                                <Statistic prefixDot={index !== 0} value={value} statistic={stat} />
                            ))}
                        </div>
                    ) : (
                        <Statistic value={props.statistics} statistic="" />
                    ))}
            </div>

            <p className="text-sm text-balance font-normal w-[20rem] text-white">{props.description}</p>

            <div>
                <div className="flex flex-row gap-2">
                    {props.tags.map((tag) => {
                        return <p className=" bg-slate-800 text-xs text-white px-2 py-[0.75px] rounded-full">{tag}</p>;
                    })}
                </div>
            </div>

            <div className="flex flex-row gap-2">
                {props.links.github && (
                    <a href={props.links.github}>
                        <Github />
                    </a>
                )}
                {props.links.website && (
                    <a href={props.links.website}>
                        <Link />
                    </a>
                )}
            </div>
        </div>
    );
}

function Statistic(props: { prefixDot?: boolean; value: string; statistic: string }) {
    if (props.prefixDot) {
        return (
            <p className="text-sm">
                {props.value} {props.statistic}
            </p>
        );
    }

    return (
        <p className="text-sm">
            {props.value} {props.statistic}
        </p>
    );
}