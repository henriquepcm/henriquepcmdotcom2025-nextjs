type SectionInfoBlockListProps = {
    children: React.ReactNode;
    className: string;
};

export default function SectionInfoBlockList({
    children,
    className,
}: SectionInfoBlockListProps) {
    return <ul className={className}>{children}</ul>;
}
