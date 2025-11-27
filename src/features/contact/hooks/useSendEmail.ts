import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const useSendEmail = () => {
    const ref = useRef<HTMLFormElement | null>(null);
    const [isSent, setIsSent] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsPending(true);

        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

        if (ref.current && serviceId && templateId && publicKey) {
            emailjs
                .sendForm(serviceId, templateId, ref.current, {
                    publicKey: publicKey,
                })
                .then(
                    () => {
                        setIsSent(true);
                        setIsPending(false);
                    },
                    (error) => {
                        console.error("FAILED...", error.text);
                    },
                );
        }
    };

    return { form: { isPending, ref, sendEmail, isSent } };
};
