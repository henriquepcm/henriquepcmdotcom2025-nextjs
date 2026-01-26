export default function BlogPostRoot({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mt-36 flex w-full items-center justify-center">
            <article className="flex w-10/12 flex-col 2xl:w-8/12">
                {children}
            </article>
        </div>
    );
}
