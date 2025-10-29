import Image from "next/image";
import Link from "next/link";
import { FormattedPosts } from "./Types";

const WP_URL = process.env.NEXT_PUBLIC_WP_URL;

export default function Blog({ posts }: { posts: FormattedPosts[] }) {
  return (
    <div className="mt-36 flex w-full items-center justify-center">
      <div className="w-10/12">
        <h1 className="mt-8 text-3xl font-bold normal-case leading-normal tracking-normal">
          Check out my posts{" "}
          <span className="whitespace-nowrap">on Frontend </span>Development,
          UI/UX Design, Digital Culture,{" "}
          <span className="whitespace-nowrap">and more</span>
        </h1>
        <ul className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <li className="space-y-1" key={post.id}>
              <Link
                href={`/blog/${post.category.slug}/`}
                className="mb-5 transform border-b-2 border-transparent pb-1 text-[0.65rem] uppercase tracking-widest duration-300 hover:border-b-2 hover:border-brandprimary"
              >
                {post.category.name}
              </Link>
              <Link
                className="group block transform space-y-2 duration-300 hover:opacity-50"
                href={`/blog/${post.category.slug}/${post.slug}`}
              >
                <div className="overflow-hidden">
                  <Image
                    src={`${WP_URL}/${post.image.filePath}`}
                    alt={post.image.altText}
                    width={766}
                    height={402}
                    className="transition duration-300 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-base font-medium">{post.title}</h2>
                <p>{post.subtitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
