import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ContactButton() {
    const pathname = usePathname();

    const href = pathname === "/" ? "#Contact" : "/#Contact";

    return (
        <Link
            aria-label="Go to contact form"
            className="brand-btn flex h-12 w-full items-center justify-center px-4 text-[0.6rem] text-brandsecondary"
            href={href}
        >
            contact
        </Link>
    );
}
