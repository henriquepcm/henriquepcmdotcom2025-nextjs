import DocumentIcon from "@/components/icons/DocumentIcon";
import getHTMLHeadings from "@/lib/getHTMLHeadings";

export default function TableOfContents({ content }: { content: string }) {
  const topics = getHTMLHeadings(content);

  console.log("topics", topics);

  return (
    <aside className="sticky top-40 hidden self-start lg:flex lg:w-4/12">
      <nav aria-label="Table of contents" className="w-full pl-10">
        <div className="flex items-center gap-2 border-b-[0.1rem] border-brandsurface pb-2">
          <div className="size-4 text-brandtextprimary opacity-30">
            <DocumentIcon />
          </div>
          <div>Table of Contents</div>
        </div>

        <ol className="toc">
          {topics.map((topic) => {
            if (topic.level === 2) {
              return (
                <li key={topic.id}>
                  <a href={`#${topic.id}`}>{topic.text}</a>
                </li>
              );
            }
            if (topic.level === 3) {
              return (
                <li key={topic.id}>
                  <ol>
                    <li>
                      <a href={`#${topic.id}`}>{topic.text}</a>
                    </li>
                  </ol>
                </li>
              );
            }
          })}
        </ol>

        {/*  <ol className="toc">
          <li>
            <a href="#introduction">
              The ubiquity that made Log4Shell a perfect storm
            </a>
          </li>
          <li>
            <a href="#getting-started">
              A vulnerability that scored a perfect 10
            </a>
            <ol>
              <li>
                <a href="#installation">
                  The human cost of maintaining critical infrastructure
                </a>
              </li>
              <li>
                <a href="#configuration">
                  How the GitHub Secure Open Source Fund is strengthening
                  security
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#advanced-topics">
              Technical lessons: Building security by default
            </a>
            <ol>
              <li>
                <a href="#performance">
                  Industry-wide lessons for sustainable open source
                </a>
                <ol>
                  <li>
                    <a href="#installation">
                      Your role in securing the software supply chain
                    </a>
                  </li>
                  <li>
                    <a href="#configuration">The path forward</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#security">Security</a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#conclusion">Conclusion</a>
          </li>
        </ol> */}
      </nav>
    </aside>
  );
}
