import { FormType } from "@/features/contact/SectionContact.types";
import FormEmailInput from "./FormEmailInput";
import FormInput from "./FormInput";
import FormMessageInput from "./FormMessageInput";
import FormSubmitButton from "./FormSubmitButton";

type FormProps = {
    children: React.ReactNode;
    form: FormType;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ children, form, onSubmit }: FormProps) {
    const { isPending, ref } = form;
    const pendingStyles = isPending ? "opacity-50" : "";

    return (
        <form
            ref={ref}
            onSubmit={onSubmit}
            className={`${pendingStyles} mt-10 flex w-full flex-col gap-5`}
        >
            {children}
        </form>
    );
}

Form.Input = FormInput;
Form.EmailInput = FormEmailInput;
Form.MessageInput = FormMessageInput;
Form.SubmitButton = FormSubmitButton;
