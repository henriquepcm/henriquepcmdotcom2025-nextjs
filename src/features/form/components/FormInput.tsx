type ContactFormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    label: string;
};

export default function ContactFormInput({
    id,
    label,
    ...props
}: ContactFormInputProps) {
    return (
        <div className="flex w-full flex-col">
            <input
                id={id}
                name={id}
                className="peer border-brandborder focus:border-brandprimary"
                type="text"
                {...props}
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
