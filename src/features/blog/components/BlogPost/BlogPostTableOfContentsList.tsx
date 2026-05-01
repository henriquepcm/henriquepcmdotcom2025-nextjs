import { Heading } from "./Types";

export default function BlogPostTableOfContentsList({
    headings,
}: {
    headings: Heading[];
}) {
    if (!headings || headings.length === 0) return null;

    return (
        //Edit styles on globals.css
        <ul className="toc mt-5 list-none">
            {headings.map((heading) => {
                return (
                    <li key={heading.id}>
                        <a
                            className="transform border-b-2 border-transparent duration-300 hover:text-brandtextprimary hover:underline"
                            href={`#${heading.id}`}
                        >
                            {heading.text}
                        </a>
                        {heading.children && (
                            <BlogPostTableOfContentsList
                                headings={heading.children}
                            />
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
