import "../styles/animations.css";
import { useEffect, useState } from "react";

export default function Typing(props: { text: string }) {
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 80);

        const cleanup = setTimeout(() => {
            clearInterval(timer);
        }, 5_000);

        return () => {
            clearInterval(timer);
            clearTimeout(cleanup);
        }
    }, []);

    return <div className="flex gap-1">
        <h1 className="text-4xl md:text-6xl">{props.text.slice(0, index)}</h1>
        <span className="blinking-indicator opacity-0 bg-white text-white">
            ▮
        </span>
    </div>
} 