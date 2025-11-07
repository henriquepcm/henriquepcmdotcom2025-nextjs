import KiwiAppAnimation from "@/components/Animations/KiwiAppAnimation";
import Section from "@/features/section/components/Section";
import { SectionData } from "./SectionAbout.types";

export default function SectionAbout({
    sectionData,
}: {
    sectionData: SectionData;
}) {
    return (
        <Section id={sectionData.id}>
            <Section.Container className="flex w-10/12 flex-col gap-10 lg:flex-row">
                <Section.Area className="lg:w-3/6">
                    <Section.Name name={sectionData.name} />
                    <Section.Title>{sectionData.titles.title}</Section.Title>
                    <Section.Subtitle>
                        {sectionData.titles.subtitle}
                    </Section.Subtitle>

                    <Section.ExternalLinkButton
                        label={sectionData.button.label}
                        link={sectionData.button.link}
                        className="w-5/6 md:w-3/6 lg:w-4/6 xl:w-4/6 2xl:w-3/6"
                        icon={sectionData.button.icon}
                    />
                </Section.Area>
                <Section.Area className="mt-5 lg:w-3/6">
                    <KiwiAppAnimation />
                </Section.Area>
            </Section.Container>
            <Section.Container className="mt-10 flex w-10/12 flex-col gap-10">
                <Section.Text>{sectionData.text}</Section.Text>
                <Section.InfoBlockList className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {sectionData.infoBlockList.map((infoBlockItem) => {
                        return (
                            <Section.InfoBlockItem key={infoBlockItem.id}>
                                <Section.Icon
                                    icon={infoBlockItem.careerHighlights.icon}
                                    className="mb-3 size-5 text-brandtextprimary"
                                />
                                <Section.Text>
                                    {infoBlockItem.careerHighlights.description}
                                </Section.Text>
                            </Section.InfoBlockItem>
                        );
                    })}
                </Section.InfoBlockList>
            </Section.Container>
        </Section>
    );
}
