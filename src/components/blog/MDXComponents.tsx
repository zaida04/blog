import XMailTable from "./Tables/XMailTable";
import Statistic from "./Statistic";

const slugizeheader = (header: any) => {
    return header.props.value.toString().toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}
const headerwithlink = "font-bold font-rubik py-4 text-center md:text-left hover:cursor-pointer"

const MDXComponents = {
    h1: (props: { children: React.ReactNode }) => {
        const slug = slugizeheader(props.children as string);

        return <a href={`#${slug}`} className="no-underline">
            <h1 id={slug} className={`text-4xl ${headerwithlink}`} {...props}>
                {props.children}
            </h1>
        </a>
    },
    h2: (props: { children: React.ReactNode }) => {
        const slug = slugizeheader(props.children as string);

        return <a href={`#${slug}`} className="no-underline">
            <h2 id={slug} className={`text-2xl md:text-3xl ${headerwithlink}`} {...props}>
                {props.children}
            </h2>
        </a>
    },
    h3: (props: { children: React.ReactNode }) => {
        const slug = slugizeheader(props.children as string);

        return <a href={`#${slug}`} className="no-underline">
            <h3 id={slug} className={`text-xl md:text-2xl ${headerwithlink}`} {...props}>
                {props.children}
            </h3>
        </a>
    },
    a: (props: { children: React.ReactNode; href: string }) => {
        return (
            <a className="decoration-pink-500" href={props.href}>
                <Statistic hover={true}>{props.children}</Statistic>
            </a>
        );
    },
    p: (props: { children: React.ReactNode }) => {
        return <p className="pb-4 font-normal leading-snug indent-4 text-left w-full">{props.children}</p>;
    },
    code: (props: { children: React.ReactNode }) => {
        return <code className="text-base text-red-300">{props.children}</code>;
    },
    pre: (props: { children: React.ReactNode }) => {
        return (
            <div className="overflow-x-auto bg-slate-800 rounded-lg mt-4 mb-8">
                <pre className="text-md p-4 mb-4 whitespace-pre">{props.children}</pre>
            </div>
        );
    },
    blockquote: (props: { children: React.ReactNode }) => {
        return <blockquote className="indent-0 rounded-lg bg-slate-800 px-4 pt-4 mb-4">{props.children}</blockquote>;
    },
    li: (props: { children: React.ReactNode }) => {
        return <li className="md:ml-8 ml-4 pl-2 mb-4 list-disc text-lg">{props.children}</li>;
    },
    ol: (props: { children: React.ReactNode }) => {
        return <ol className="md:indent-8 ml-2 px-2 md:px-4 list-decimal">{props.children}</ol>;
    },
    ul: (props: { children: React.ReactNode }) => {
        return <ul className="list-desc pb-8">{props.children}</ul>;
    },
    // biome-ignore lint/a11y/useAltText: <explanation>
    img: (props: { src: string }) => <img {...props} className="pt-8" />,
    XMailTable,
};

export default MDXComponents;
