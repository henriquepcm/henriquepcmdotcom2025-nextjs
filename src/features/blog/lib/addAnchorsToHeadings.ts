import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { slugify } from "../../../lib/slugify";
import type { Root, Element, Text } from "hast";

export default async function addAnchorsToHeadings(html: string) {
    function rehypeSlugCustom() {
        return (tree: Root) => {
            visit(tree, "element", (node: Element) => {
                if (/^h[1-6]$/.test(node.tagName)) {
                    const textNode = node.children.find(
                        (child): child is Text => child.type === "text",
                    );
                    const text = textNode?.value || "";
                    node.properties = node.properties || {};
                    node.properties.id = slugify(text);
                }
            });
        };
    }

    const processed = await unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeSlugCustom) //adds IDs based on heading text
        .use(rehypeStringify)
        .process(html);

    return processed.toString();
}
