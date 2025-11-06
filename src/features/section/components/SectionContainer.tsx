type SectionContentWraperProps = {
    children: React.ReactNode;
    className: string;
};

export default function SectionContainer({
    children,
    className,
}: SectionContentWraperProps) {
    return <div className={className}>{children}</div>;
}
