export default function BlogPostSubtitle({ subtitle }: { subtitle: string }) {
    return (
        <p className="mt-4 text-[1rem] leading-loose tracking-normal">
            {subtitle}
        </p>
    );
}
