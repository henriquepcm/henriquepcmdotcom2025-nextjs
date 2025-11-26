type ContactFormInputProps = {
    id: string;
    label: string;
    isDisabled: boolean;
    isRequired: boolean;
};

export default function ContactFormInput({
    id,
    label,
    isDisabled,
    isRequired,
}: ContactFormInputProps) {
    return (
        <div className="flex w-full flex-col">
            <input
                id={id}
                name={id}
                className="peer border-brandborder focus:border-brandprimary"
                type="text"
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
