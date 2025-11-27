import { useState, useRef } from "react";
import { Menu } from "@/types/headerTypes";
import useIsBlog from "@/hooks/useIsBlog";
import Link from "next/link";
import { useOutsideClick } from "./hooks/useOutsideClick";
import { BurgerIcon } from "./BurgerIcon";

export default function MenuMobile({ items, button }: Menu) {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    const menuRef = useRef<HTMLUListElement | null>(null);
    const menuIconRef = useRef<HTMLButtonElement | null>(null);

    const isBlog = useIsBlog();

    const contactUrl = isBlog ? `/#${button.link}` : `#${button.link}`;

    function handleMenuVisibility() {
        setIsMobileMenuVisible((prev) => !prev);
    }

    useOutsideClick(menuRef, menuIconRef, () => setIsMobileMenuVisible(false));

    return (
        <div className="relative lg:hidden">
            <button
                aria-label="open the mobile menu"
                ref={menuIconRef}
                onClick={handleMenuVisibility}
                className="items-center justify-center p-1 duration-300 hover:rounded-full hover:bg-brandaccent"
            >
                <BurgerIcon className="size-6 text-brandtextprimary" />
            </button>

            <nav
                aria-label="Website mobile menu"
                className={`${
                    isMobileMenuVisible
                        ? "visible opacity-100"
                        : "invisible rotate-45 opacity-0"
                } transition-translate-y absolute right-0 top-10 w-60 origin-top-right rounded-md border border-brandborder bg-brandsurface shadow-[-15px_20px_20px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out`}
            >
                <ul
                    ref={menuRef}
                    className="flex flex-col justify-center gap-5 p-10 text-[0.6rem] uppercase tracking-[0.15rem] text-brandtextprimary"
                >
                    {items.map((item) => {
                        const excluded = ["Footer", "Header", "Contact"];
                        const url = isBlog
                            ? `/#${item.title}`
                            : `#${item.title}`;

                        if (excluded.includes(item.title)) {
                            return null;
                        }
                        return (
                            <li key={item.id}>
                                <Link
                                    onClick={handleMenuVisibility}
                                    className="block"
                                    href={url}
                                    aria-label={`Go to the ${item.title} section"`}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <Link
                            onClick={handleMenuVisibility}
                            className="block"
                            href={contactUrl}
                            aria-label="Go to the contact form"
                        >
                            {button.label}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
