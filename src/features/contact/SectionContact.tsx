"use client";
import Section from "@/features/section/components/Section";
import SectionContactDetails from "./SectionContactDetails";
import { ContactUi } from "./SectionContact.types";
import ContactForm from "./ContactForm";
import { useSendEmail } from "./hooks/useSendEmail";
import ContactFormSuccessMessage from "./ContactFormSuccessMessage";

export default function SectionContact({ contact }: { contact: ContactUi }) {
    const { id, name, title } = contact.section;

    // ––––– Form –––––––––––––––––––––––––
    const { form } = useSendEmail();

    return (
        <Section id={id}>
            <Section.Container className="flex w-10/12 flex-col justify-between gap-24 lg:flex-row lg:px-20">
                {!form.isSent && (
                    <Section.Area className="lg:w-6/12">
                        <Section.Name name={name} />
                        <Section.Title>{title}</Section.Title>
                        <ContactForm form={form} />
                    </Section.Area>
                )}
                {form.isSent && <ContactFormSuccessMessage />}
                <Section.Area className="flex w-full flex-col items-center justify-center gap-5 px-16 md:px-60 lg:w-3/12 lg:px-0">
                    <SectionContactDetails user={contact.user} />
                </Section.Area>
            </Section.Container>
        </Section>
    );
}
