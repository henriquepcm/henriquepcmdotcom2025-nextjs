type SectionIconProps = {
    icon: string;
    className: string;
};

export default function SectionIcon({ icon, className }: SectionIconProps) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: icon,
            }}
            className={className}
        ></div>
    );
}
