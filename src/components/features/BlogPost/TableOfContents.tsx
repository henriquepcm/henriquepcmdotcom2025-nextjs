import DocumentIcon from "@/components/icons/DocumentIcon";
import getHTMLHeadings from "@/lib/getHTMLHeadings";
import TableOfContentsList from "./TableOfContentsList";
import { Heading } from "./Types";

export default function TableOfContents({ content }: { content: string }) {
  const headings = getHTMLHeadings(content);

  // –––––– Get Headings (h1, h2, h3) nested correctly to loop over –––––––––––––––––
  const headingsNested: Heading[] = [];
  const stack: Heading[] = [];

  for (const heading of headings) {
    while (stack.length && stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }
    if (stack.length === 0) {
      headingsNested.push(heading);
      stack.push(heading);
    } else {
      const parent = stack[stack.length - 1];
      parent.children = parent.children || [];
      parent.children.push(heading);
      stack.push(heading);
    }
  }

  return (
    <aside className="sticky top-28 hidden max-h-[66vh] self-start overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-brandborder lg:flex lg:w-4/12">
      <nav aria-label="Table of contents" className="w-full pl-10">
        <div className="flex items-center gap-2 border-b-[0.1rem] border-brandsurface pb-2">
          <div className="size-4 text-brandtextprimary opacity-30">
            <DocumentIcon />
          </div>
          <div>Table of Contents</div>
        </div>
        <TableOfContentsList headings={headingsNested} />
      </nav>
    </aside>
  );
}
