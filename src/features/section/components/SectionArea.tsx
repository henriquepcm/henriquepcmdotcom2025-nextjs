type SectionGroupProps = {
    children: React.ReactNode;
    className: string;
};

export default function SectionArea({
    children,
    className,
}: SectionGroupProps) {
    return <div className={className}>{children}</div>;
}
