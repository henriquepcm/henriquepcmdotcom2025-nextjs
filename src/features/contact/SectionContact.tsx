"use client";
import Form from "@/features/form/components/Form";
import Section from "@/features/section/components/Section";
import SectionContactDetails from "./SectionContactDetails";
import { ContactUi } from "./SectionContact.types";

export default function SectionContact({ contact }: { contact: ContactUi }) {
    const section = contact.section;

    return (
        <Section id={section.id}>
            <Section.Container className="flex w-10/12 flex-col justify-between gap-24 lg:flex-row lg:px-20">
                <Section.Area className="lg:w-6/12">
                    <Section.Name name={section.name} />
                    <Section.Title>{section.title}</Section.Title>
                    <Form>
                        <div className="flex gap-10">
                            <Form.Input
                                isDisabled={false}
                                isRequired={true}
                                id="first-name"
                                label="First Name"
                            />
                            <Form.Input
                                id="last-name"
                                label="Last Name"
                                isDisabled={false}
                                isRequired={false}
                            />
                        </div>
                        <Form.EmailInput
                            id="email"
                            label="Email"
                            isDisabled={false}
                            isRequired={true}
                        />
                        <Form.MessageInput id="message" label="Message" />
                        <Form.SubmitButton isPending={false} />
                    </Form>
                </Section.Area>
                <Section.Area className="flex w-full flex-col items-center justify-center gap-5 px-20 md:px-60 lg:w-3/12 lg:px-0">
                    <SectionContactDetails user={contact.user} />
                </Section.Area>
            </Section.Container>
        </Section>
    );
}
