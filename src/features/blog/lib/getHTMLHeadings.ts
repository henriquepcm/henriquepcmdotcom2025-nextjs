import rehypeParse from "rehype-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { slugify } from "../../../lib/slugify";

export default function getHTMLHeadings(html: string) {
    const headings: { text: string; id: string; level: number }[] = [];
    const useIDs = new Set();

    const tree = unified().use(rehypeParse, { fragment: true }).parse(html);

    visit(tree, "element", (node) => {
        if (/^h[1-6]$/.test(node.tagName)) {
            const text = (node.children || [])
                .filter((child) => child.type === "text")
                .map((child) => child.value)
                .join("");

            // Generate the ID for each heading based on its text
            const id = (node.properties?.id as string) || slugify(text);

            // Provide a unique ID in case subtitles have the same exact text
            let uniqueID = id;
            let counter = 1;
            while (useIDs.has(uniqueID)) {
                uniqueID = `${id}-${counter++}`;
            }

            useIDs.add(uniqueID);

            headings.push({
                text,
                id: uniqueID,
                level: parseInt(node.tagName.slice(1)),
            });
        }
    });

    return headings;
}
