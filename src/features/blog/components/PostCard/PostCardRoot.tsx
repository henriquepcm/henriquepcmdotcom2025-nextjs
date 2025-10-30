export default function PostCardRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return <li className="space-y-1">{children}</li>;
}
