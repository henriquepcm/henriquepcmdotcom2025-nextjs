import rehypeParse from "rehype-parse";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import type { Root, Element, Text } from "hast";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { slugify } from "./slugify";

export default async function addAnchorsToHeadings(html: string) {
    const schema = structuredClone(defaultSchema);

    // Allow 'id' on heading tags (rehypeSlug adds them)
    schema.attributes ??= {};
    schema.attributes.h1 = [["id", "className"]];
    schema.attributes.h2 = [["id", "className"]];
    schema.attributes.h3 = [["id", "className"]];
    schema.attributes.h4 = [["id", "className"]];
    schema.attributes.h5 = [["id", "className"]];
    schema.attributes.h6 = [["id", "className"]];

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
        .use(rehypeSanitize, schema)
        .use(rehypeSlugCustom) //adds IDs based on heading text
        .use(rehypeStringify)
        .process(html);

    return processed.toString();
}
