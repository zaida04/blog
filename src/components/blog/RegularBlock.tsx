export default function RegularBlock(props: { text: string }) {
    return (
        <div className="overflow-x-scroll md:overflow-x-auto rounded-md">
            <div className="text-md whitespace-pre-wrap font-cascadia">
                <pre className="language-markdown">
                    <code>{props.text}</code>
                </pre>
            </div>
        </div>
    );
}
