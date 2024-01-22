import { cn } from "../utils/cn";

export default function Tag(props: { children: React.ReactNode; className?: string }) {
    return <p className={cn("bg-slate-800 text-xs text-white px-2 py-[0.75px] rounded-full", props.className)}>
        {props.children}
    </p>
}
