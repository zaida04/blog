export default function Link(props: { className?: string, href: string, text: string; }) {
    return <span className={props.className}>
        <a className="font-semibold underline-offset-[3px]" href={props.href}>{props.text}</a>
    </span>
}