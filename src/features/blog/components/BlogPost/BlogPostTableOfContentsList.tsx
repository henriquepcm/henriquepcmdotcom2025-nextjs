import { Heading } from "./Types";

export default function BlogPostTableOfContentsList({
  headings,
}: {
  headings: Heading[];
}) {
  if (!headings || headings.length === 0) return null;

  return (
    //Edit styles on globals.css
    <ol className="toc">
      {headings.map((heading) => {
        return (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
            {heading.children && (
              <BlogPostTableOfContentsList headings={heading.children} />
            )}
          </li>
        );
      })}
    </ol>
  );
}
