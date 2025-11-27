import Link from "next/link";

export default function Logo({ svgString }: { svgString: string }) {
    return (
        <Link
            dangerouslySetInnerHTML={{ __html: svgString }}
            href="/"
            aria-label="Go to the home section"
            className="w-20 text-brandtextprimary"
        ></Link>
    );
}
