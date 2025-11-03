import Link from "next/link";

type CardLinkProps = {
  children: React.ReactNode;
  postSlug: string;
};

export default function PostCardLink({ children, postSlug }: CardLinkProps) {
  return (
    <Link
      className="group block transform space-y-2 duration-300 hover:opacity-50"
      href={`/blog/${postSlug}`}
    >
      {children}
    </Link>
  );
}
