import Section from "../section/components/Section";

export default function ContactFormSuccessMessage() {
    return (
        <Section.Area
            className={`flex flex-col items-center justify-center gap-5 lg:w-6/12`}
        >
            <h2>Thanks for reaching out!</h2>
            <p className="text-center">
                Your message is on its way, and I&apos;ll get back to you as
                soon as possible.
            </p>
        </Section.Area>
    );
}
