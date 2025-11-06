import { Menu } from "@/types/headerTypes";
import ButtonContact from "./ButtonContact";
import Link from "next/link";
import useIsBlog from "@/hooks/useIsBlog";

export default function MenuMain({ items, button }: Menu) {
    const isBlog = useIsBlog();

    return (
        <nav
            aria-label="Website main menu"
            className="main-menu hidden flex-row items-center md:gap-5 lg:flex lg:gap-10"
        >
            <ul className="flex flex-row text-[0.6rem] uppercase tracking-[0.15rem] text-brandtextprimary md:gap-5 lg:gap-10">
                {items.map((item) => {
                    const excluded = ["Footer", "Header", "Contact"];
                    const url = isBlog ? `/#${item.title}` : `#${item.title}`;

                    if (excluded.includes(item.title)) {
                        return null;
                    }
                    return (
                        <li key={item.id}>
                            <Link
                                href={url}
                                aria-label={`Go to the ${item.title} section"`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ButtonContact isBlog={isBlog} button={button} />
        </nav>
    );
}
