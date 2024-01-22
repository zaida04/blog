import Prism from "prismjs";
import { useEffect } from "react";

export default function CodeBlock(props: { code: string; language: string }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className="overflow-x-scroll md:overflow-x-auto rounded-md">
            <div className="text-md whitespace-pre-wrap font-cascadia">
                <pre className={props.language ?? "language-javascript"}>
                    <code>{props.code}</code>
                </pre>
            </div>
        </div>
    );
}
