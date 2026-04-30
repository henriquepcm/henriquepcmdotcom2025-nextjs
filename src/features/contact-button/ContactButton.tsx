import Link from "next/link";

export default function ContactButton() {
    return (
        <Link
            aria-label="Go to contact form"
            className="brand-btn flex h-12 w-full items-center justify-center px-4 text-[0.6rem] text-brandsecondary"
            href="#Contact"
        >
            contact
        </Link>
    );
}
