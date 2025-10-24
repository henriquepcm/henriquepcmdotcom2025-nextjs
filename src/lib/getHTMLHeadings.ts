import rehypeParse from "rehype-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

export default function getHTMLHeadings(html: string) {
  const headings: { text: string; id: string; level: number }[] = [];

  const tree = unified().use(rehypeParse, { fragment: true }).parse(html);

  visit(tree, "element", (node) => {
    if (/^h[1-6]$/.test(node.tagName)) {
      const text = (node.children || [])
        .filter((child) => child.type === "text")
        .map((child) => child.value)
        .join("");

      const id =
        (node.properties?.id as string) ||
        text.toLowerCase().replace(/\s+/g, "-");

      headings.push({ text, id, level: parseInt(node.tagName.slice(1)) });
    }
  });

  return headings;
}
