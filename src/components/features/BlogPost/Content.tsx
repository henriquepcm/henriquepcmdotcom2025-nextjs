import TableOfContents from "./TableOfContents";

export default function Content({ content }: { content: string }) {
  const markup = {
    __html: content,
  };

  return (
    <div className="mt-8 flex w-full justify-between">
      <div className="w-full lg:w-10/12 lg:pr-10">
        <section>
          <div
            dangerouslySetInnerHTML={markup}
            className="flex w-full flex-col gap-8 text-base leading-loose tracking-normal"
          ></div>
        </section>
      </div>
      <TableOfContents content={content} />
    </div>
  );
}
