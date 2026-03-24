import SectionAboutContainer from "@/features/about/SectionAboutContainer";
import SectionContactContainer from "@/features/contact/SectionContactContainer";
import SectionHome from "@/features/home/SectionHome";
import SectionProjectsContainer from "@/features/projects/SectionProjectsContainer";
import SectionSkillsContainer from "@/features/skills/SectionSkillsContainer";

export default async function App() {
    return (
        <>
            <SectionHome />
            <SectionAboutContainer />
            <SectionProjectsContainer />
            <SectionSkillsContainer />
            <SectionContactContainer />
        </>
    );
}
