import CheckedIcon from "./icons/CheckedIcon";

type ThemeListItemProps = {
    onClick: () => void;
    isSelected: boolean;
    themeName: string;
};

export default function ThemeListItem({
    onClick,
    isSelected,
    themeName,
}: ThemeListItemProps) {
    const selectionStyles = isSelected ? "opacity-100" : "opacity-0";

    return (
        <li role="none">
            <button
                onClick={onClick}
                role="menuitemradio"
                aria-checked={isSelected}
                className="flex w-full transform justify-between gap-2 rounded-md p-2 duration-300 hover:cursor-pointer hover:bg-brandaccent"
            >
                <div className="text-brandtextprimary">{themeName}</div>
                <div className={`${selectionStyles} flex w-3`}>
                    <CheckedIcon />
                </div>
            </button>
        </li>
    );
}
