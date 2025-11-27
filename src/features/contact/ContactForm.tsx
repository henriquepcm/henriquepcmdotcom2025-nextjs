import Form from "../form/components/Form";
import { useSpamGuard } from "./hooks/useSpamGuard";
import { FormType } from "./SectionContact.types";

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
            <div className="flex gap-10">
                <Form.Input
                    isDisabled={isPending}
                    isRequired={true}
                    id="first-name"
                    label="First Name"
                />
                <Form.Input
                    id="last-name"
                    label="Last Name"
                    isDisabled={isPending}
                    isRequired={false}
                />
            </div>
            {/* Hidden honeypot */}
            <div className="company-input flex w-full flex-col">
                <input
                    id="company"
                    name="company"
                    className="peer w-full border-brandborder focus:border-brandprimary"
                    type="text"
                    onChange={(e) => setCompanyInput(e.target.value)}
                />
                <label
                    htmlFor="company"
                    className="-translate-y-[3.6rem] peer-focus:text-brandprimary"
                >
                    Company
                </label>
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
