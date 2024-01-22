export default function Statistic(props: { children: React.ReactNode; hover?: boolean }) {
    return <code className={`text-pink-600 font-bold ${props.hover && "hover:underline"}`}>{props.children}</code>;
}
