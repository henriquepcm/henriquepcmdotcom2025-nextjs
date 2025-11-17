import getGraphQLData from "@/lib/getGraphQLData";
import { GET_SKILLS_DATA } from "./SectionSkills.query";
import SectionSkills from "./SectionSkills";
import ErrorMessage from "@/components/Error/ErrorMessage";
import { SectionSkillsDataApi } from "./SectionSkills.types";

export default async function SectionSkillsContainer() {
    const section = "Skills Section";
    try {
        const fetchedSkillsData =
            await getGraphQLData<SectionSkillsDataApi>(GET_SKILLS_DATA);

        if (!fetchedSkillsData) {
            console.error(`Missing ${section} data`);
            throw new Error(`Missing ${section} data`);
        }

        const skills = fetchedSkillsData.technologies.nodes
            .map((technology) => {
                return {
                    id: technology.id,
                    icon: technology.technologies.icon,
                    label: technology.technologies.label,
                };
            })
            .sort((a, b) => a.label.localeCompare(b.label));

        const sectionSkillsData = {
            sectionId: fetchedSkillsData.page.title,
            name: fetchedSkillsData.page.title,
            titles: {
                title: fetchedSkillsData.page.titles.mainTitle,
                subtitle: fetchedSkillsData.page.titles.secondaryTitle,
            },
            skills,
        };

        return <SectionSkills sectionSkills={sectionSkillsData} />;
    } catch (error) {
        const message = `We couldn't load the data for: "${section}"`;
        console.error(message, error);
        return <ErrorMessage message={message} />;
    }
}
