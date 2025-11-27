type ContactFormMessageInputProps = {
    id: string;
    label: string;
    isRequired: boolean;
    isDisabled: boolean;
};

export default function ContactFormMessageInput({
    id,
    label,
    isRequired,
    isDisabled,
}: ContactFormMessageInputProps) {
    return (
        <div className="flex flex-col">
            <textarea
                id={id}
                name={id}
                className="required peer border-brandborder focus:border-brandprimary"
                required={isRequired}
                disabled={isDisabled}
            ></textarea>
            <label
                htmlFor={id}
                className="-translate-y-[11rem] peer-focus:text-brandprimary"
            >
                {label}
            </label>
        </div>
    );
}
