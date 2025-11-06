import ChevronIcon from "@/components/icons/ChevronIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import Link from "next/link";

type Item = {
    label: string;
    href: string;
};

export default function Breadcrumb({ items }: { items: Item[] }) {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-4 text-[0.6rem]">
                {items.map((item: Item, index: number) => {
                    const isLastItem = index === items.length - 1;

                    return (
                        <li
                            key={item.label}
                            className="flex items-center justify-center gap-3"
                        >
                            {item.label === "Home" && (
                                <div
                                    aria-hidden="true"
                                    className="size-3 -translate-y-[0.2rem] text-brandtextprimary opacity-30"
                                >
                                    <HomeIcon />
                                </div>
                            )}

                            {isLastItem ? (
                                //sr-only so screen readers can read it but it doesn't show up on the screen, so the name of the page doesn't appear twice.
                                <span
                                    aria-current="page"
                                    className="sr-only border-b-2 border-transparent pb-1 text-brandtextsecondary"
                                >
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    className="transform border-b-2 border-transparent pb-1 text-brandtextprimary duration-300 hover:border-b-2 hover:border-brandprimary"
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            )}
                            {!isLastItem && (
                                <div
                                    aria-hidden="true"
                                    className="size-3 -translate-y-[0.2rem] -rotate-90 text-brandtextprimary opacity-30"
                                >
                                    <ChevronIcon />
                                </div>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
