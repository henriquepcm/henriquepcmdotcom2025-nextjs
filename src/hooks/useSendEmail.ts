import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const useSendEmail = () => {
     const form = useRef<HTMLFormElement | null>(null);
     const [isFormSent, setIsFormSent] = useState(false);
     const [isPending, setIsPending] = useState(false);

     const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          setIsPending(true);

          const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
          const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
          const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

          if (form.current && serviceId && templateId && publicKey) {
               emailjs
                    .sendForm(serviceId, templateId, form.current, {
                         publicKey: publicKey,
                    })
                    .then(
                         () => {
                              setIsFormSent(true);
                              setIsPending(false);
                         },
                         (error) => {
                              console.log("FAILED...", error.text);
                         }
                    );
          }
     };

     return { form, isFormSent, isPending, sendEmail };
};
