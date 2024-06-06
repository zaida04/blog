import { DateTime } from "luxon";
import type { BlogPost } from "../../content/config";
import readingTime from "reading-time";
import Tag from "../Tag";

export default function BlogCard(props: {
    id: string,
    slug: string,
    body: string,
    data: BlogPost
}) {
    return (
        <div className="flex flex-col max-w-[45rem]">
            <a className="no-underline w-fit" href={`/blog/${props.slug}`}>
                <h1 className="text-2xl underline underline-offset-2 font-semibold text-white transition-opacity hover:opacity-60">{props.data.title}</h1>
            </a>

            <div className="flex text-gray-500">
                <p className="text-sm">{DateTime.fromMillis(props.data.publishedAt).toRelative()}</p>
                <p className="text-sm px-2">•</p>
                <p className="text-sm text-yellow-100">{readingTime(props.body, { wordsPerMinute: 150 }).text} </p>
            </div>
            <p className="text-base text-gray-400">{props.data.description}</p>
            <div className="pt-2 flex flex-row gap-1">
                {props.data.tags?.map((tag) => <Tag className="text-sm">{tag}</Tag>)}
            </div>
        </div>
    );
}
