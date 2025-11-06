import addAnchorsToHeadings from "@/features/blog/lib/addAnchorsToHeadings";
import TableOfContents from "./BlogPostTableOfContents";

export default async function BlogPostContent({
    content,
}: {
    content: string;
}) {
    const contentWithAnchors = await addAnchorsToHeadings(content);

    return (
        <div className="mt-8 flex w-full justify-between">
            <div className="w-full lg:w-10/12 lg:pr-10">
                <section>
                    <div
                        dangerouslySetInnerHTML={{ __html: contentWithAnchors }}
                        className="flex w-full flex-col gap-8 text-base leading-loose tracking-normal"
                    ></div>
                </section>
            </div>
            <TableOfContents content={content} />
        </div>
    );
}
