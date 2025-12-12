import SectionAboutContainer from "@/features/about/SectionAboutContainer";
import SectionContactContainer from "@/features/contact/SectionContactContainer";
import SectionHomeContainer from "@/features/home/SectionHomeContainer";
import SectionProjectsContainer from "@/features/projects/SectionProjectsContainer";
import SectionSkillsContainer from "@/features/skills/SectionSkillsContainer";

export default async function App() {
    return (
        <>
            <SectionHomeContainer />
            <SectionAboutContainer />
            <SectionProjectsContainer />
            <SectionSkillsContainer />
            <SectionContactContainer />
        </>
    );
}
