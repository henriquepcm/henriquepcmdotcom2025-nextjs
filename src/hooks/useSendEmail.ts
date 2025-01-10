import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const useSendEmail = () => {
     const form = useRef<HTMLFormElement | null>(null);
     const [isFormSent, setIsFormSent] = useState(false);
     const [isPending, setIsPending] = useState(false);

     const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          setIsPending(true);

          const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
          const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
          const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

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
