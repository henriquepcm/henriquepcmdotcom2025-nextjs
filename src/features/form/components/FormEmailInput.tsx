type ContactFormEmailInputProps = {
    id: string;
    label: string;
    isDisabled: boolean;
    isRequired: boolean;
};

export default function ContactFormEmailInput({
    id,
    label,
    isDisabled,
    isRequired,
}: ContactFormEmailInputProps) {
    return (
        <div className="flex w-full flex-col">
            <input
                id={id}
                name={id}
                className="peer w-full border-brandborder focus:border-brandprimary"
                type="email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+$"
                title="e.g., user@example.com"
                disabled={isDisabled}
                required={isRequired}
            />
            <label
                htmlFor={id}
                className="-translate-y-[3.6rem] peer-focus:text-brandprimary"
            >
                {label}
            </label>
        </div>
    );
}
