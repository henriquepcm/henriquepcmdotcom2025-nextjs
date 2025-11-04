import { FormattedPostType } from "../../types/types";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import PostCard from "../PostCard/PostCard";

export default function BlogPage({ posts }: { posts: FormattedPostType[] }) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <div className="mt-36 flex w-full items-center justify-center">
      <div className="w-10/12">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="mt-8 text-3xl font-bold normal-case leading-normal tracking-normal">
          Frontend Development, UI/UX Design, Digital Culture, and more
        </h1>
        <div>Happiness is only real when shared</div>
        <ul className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
}
