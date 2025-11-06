import KiwiAppAnimation from "@/components/Animations/KiwiAppAnimation";
import Section from "@/features/section/components/Section";
import { Data } from "@/types/aboutTypes";

export default function SectionAbout({ data }: { data: Data }) {
    //————— Titles ———————————————
    const section = data.page.title;
    const mainTitle = data.page.titles.mainTitle;
    const secondaryTitle = data.page.titles.secondaryTitle;

    //————— Button ———————————————
    const buttonLabel = data.page.resume.buttonLabel;
    const buttonIcon = data.page.resume.buttonIcon;
    const buttonFilePath = data.page.resume.resumeDownloadLink;

    //————— Career Highlights ———————————————
    const careerHighlights = data.careerHighlights.nodes;
    const highlightsSectionTitle = data.page.resume.highlightsSectionTitle;
    return (
        <Section id={section}>
            <Section.Container className="flex w-10/12 flex-col gap-10 lg:flex-row">
                <Section.Area className="lg:w-3/6">
                    <Section.Name name={section} />
                    <Section.Title>{mainTitle}</Section.Title>
                    <Section.Subtitle>{secondaryTitle}</Section.Subtitle>

                    <Section.ExternalLinkButton
                        label={buttonLabel}
                        link={buttonFilePath}
                        className="w-5/6 md:w-3/6 lg:w-4/6 xl:w-4/6 2xl:w-3/6"
                        icon={buttonIcon}
                    />
                </Section.Area>
                <Section.Area className="mt-5 lg:w-3/6">
                    <KiwiAppAnimation />
                </Section.Area>
            </Section.Container>
            <Section.Container className="mt-10 flex w-10/12 flex-col gap-10">
                <Section.Text>{highlightsSectionTitle}</Section.Text>
                <Section.InfoBlockList className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {careerHighlights.map((highlight) => {
                        return (
                            <Section.InfoBlockItem key={highlight.id}>
                                <Section.Icon
                                    icon={highlight.careerHighlights.icon}
                                    className="mb-3 size-5 text-brandtextprimary"
                                />
                                <Section.Text>
                                    {highlight.careerHighlights.description}
                                </Section.Text>
                            </Section.InfoBlockItem>
                        );
                    })}
                </Section.InfoBlockList>
            </Section.Container>
        </Section>
    );
}
