import Link from "next/link";

type CardLinkProps = {
  children: React.ReactNode;
  categorySlug: string;
  postSlug: string;
};

export default function PostCardLink({
  children,
  categorySlug,
  postSlug,
}: CardLinkProps) {
  return (
    <Link
      className="group block transform space-y-2 duration-300 hover:opacity-50"
      href={`/blog/${categorySlug}/${postSlug}`}
    >
      {children}
    </Link>
  );
}
