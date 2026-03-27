import Link from "next/link";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import { Button } from "@/types/headerTypes";

type ButtonContactProps = {
    button: Button;
    isBlog: boolean;
};

export default function ButtonContact({ button, isBlog }: ButtonContactProps) {
    const url = isBlog ? `/#${button.link}` : `#${button.link}`;

    return (
        <>
            <Link
                aria-label="Go to contact form"
                className="brand-btn flex h-10 w-full items-center justify-center px-4 text-[0.6rem] text-brandsecondary"
                href={url}
            >
                <span className="hidden lg:inline">{button.label}</span>
                <span className="size-5 lg:hidden">
                    <EnvelopeIcon />
                </span>
            </Link>
        </>
    );
}
