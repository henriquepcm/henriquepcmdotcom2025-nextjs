import Link from "next/link";

export default function BlogLogo() {
  return (
    <Link
      href="/blog"
      className="space-x-2 text-2xl font-semibold tracking-normal"
    >
      <span>/</span>
      <span className="text-brandtextprimary">Blog</span>
    </Link>
  );
}
