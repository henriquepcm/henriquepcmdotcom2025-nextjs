import ChevronIcon from "@/components/icons/ChevronIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import Link from "next/link";

export default function Breadcrumb({ slug }: { slug?: string }) {
  return (
    <nav aria-label="Breadcrum">
      <ol className="flex items-center gap-4 text-[0.6rem]">
        <li aria-hidden="true">
          <div className="size-3 text-brandtextprimary opacity-30">
            <HomeIcon />
          </div>
        </li>
        <li>
          <Link
            className="transform border-transparent pb-1 text-brandtextprimary duration-300 hover:border-b-2 hover:border-brandprimary"
            href="/"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <div className="size-3 -rotate-90 text-brandtextprimary opacity-30">
            <ChevronIcon />
          </div>
        </li>
        {slug && (
          <>
            <li>
              <Link
                className="transform border-transparent pb-1 text-brandtextprimary duration-300 hover:border-b-2 hover:border-brandprimary"
                href="/blog"
              >
                {slug}
              </Link>
            </li>
            <li aria-hidden="true">
              <div className="size-3 -rotate-90 text-brandtextprimary opacity-30">
                <ChevronIcon />
              </div>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
