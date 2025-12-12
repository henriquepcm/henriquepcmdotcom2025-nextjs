import { useSpamGuard } from "./hooks/useSpamGuard";
import { FormType } from "./SectionContact.types";
import Form from "../form/components/Form";

export default function ContactForm({ form }: { form: FormType }) {
    // ––––– Form –––––––––––––––––––––––––
    const { isPending, sendEmail } = form;

    // ––––– Spam –––––––––––––––––––––––––
    const { setCompanyInput, isBot } = useSpamGuard();

    // ––––– Form handler –––––––––––––––––––––––––
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (isBot()) return;
        sendEmail(e);
    }

    return (
        <Form form={form} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                <Form.Input
                    id="first-name"
                    label="First Name"
                    required
                    disabled={isPending}
                />
                <Form.Input
                    id="last-name"
                    label="Last Name"
                    disabled={isPending}
                />
            </div>
            {/* Hidden honeypot – class "company-input" hides de field from screens.  */}
            <div
                className="company-input flex w-full flex-col"
                aria-hidden="true"
            >
                <Form.Input
                    id="company"
                    label="Company"
                    onChange={(e) => setCompanyInput(e.target.value)}
                    tabIndex={-1}
                />
            </div>
            <Form.EmailInput
                id="email"
                label="Email"
                isDisabled={isPending}
                isRequired={true}
            />
            <Form.MessageInput
                id="message"
                label="Message"
                isRequired={true}
                isDisabled={isPending}
            />
            <Form.SubmitButton isPending={isPending} />
        </Form>
    );
}
