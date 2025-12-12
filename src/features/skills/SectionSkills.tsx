import Section from "@/features/section/components/Section";
import { SectionSkillsDataUi } from "./SectionSkills.types";
import SkillCard from "./SkillCard";

export default function SectionSkills({
    sectionSkills,
}: {
    sectionSkills: SectionSkillsDataUi;
}) {
    const { sectionId, name, titles, skills } = sectionSkills;
    return (
        <Section id={sectionId}>
            <Section.Container className="flex w-10/12 flex-col">
                <Section.Area className="w-10/12 lg:w-6/12">
                    <Section.Name name={name} />
                    <Section.Title>{titles.title}</Section.Title>
                    <Section.Subtitle>{titles.subtitle}</Section.Subtitle>
                </Section.Area>
                <ul className="grid w-fit grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.id}
                            label={skill.label}
                            icon={skill.icon}
                        />
                    ))}
                </ul>
            </Section.Container>
        </Section>
    );
}
