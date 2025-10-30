import rehypeParse from "rehype-parse";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

export default async function addAnchorsToHeadings(html: string) {
  const processed = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSlug) //adds IDs based on heading text
    .use(rehypeStringify)
    .process(html);

  return processed.toString();
}
