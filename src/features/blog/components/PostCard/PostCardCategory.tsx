import Link from "next/link";
import type { CategoryType } from "../../types/types";

export default function PostCardCategory({
    category,
}: {
    category: CategoryType;
}) {
    return (
        <Link
            href={`/blog/${category.slug}/`}
            className="mb-5 transform border-b-2 border-transparent pb-1 text-[0.65rem] uppercase tracking-widest duration-300 hover:border-b-2 hover:border-brandprimary"
        >
            {category.name}
        </Link>
    );
}
