type ContactFormMessageInputProps = {
    id: string;
    label: string;
};

export default function ContactFormMessageInput({
    id,
    label,
}: ContactFormMessageInputProps) {
    return (
        <div className="flex flex-col">
            <textarea
                id={id}
                name={id}
                className="required peer border-brandborder focus:border-brandprimary"
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
