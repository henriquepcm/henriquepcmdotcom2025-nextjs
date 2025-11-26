import FormEmailInput from "./FormEmailInput";
import FormInput from "./FormInput";
import FormMessageInput from "./FormMessageInput";
import FormSubmitButton from "./FormSubmitButton";

type ContactFormProps = {
    children: React.ReactNode;
    ref?: React.RefObject<HTMLFormElement>;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ children, ref, onSubmit }: ContactFormProps) {
    return (
        <form
            ref={ref}
            onSubmit={onSubmit}
            className="mt-10 flex w-full flex-col gap-5"
        >
            {children}
        </form>
    );
}

Form.Input = FormInput;
Form.EmailInput = FormEmailInput;
Form.MessageInput = FormMessageInput;
Form.SubmitButton = FormSubmitButton;
