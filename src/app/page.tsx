import SectionAboutContainer from "@/components/sections/SectionAbout/SectionAboutContainer";
import SectionProjectsContainer from "@/components/sections/SectionProjects/SectionProjectsContainer";
import SectionHomeContainer from "@/components/sections/SectionHome/SectionHomeContainer";
import SectionSkillsContainer from "@/components/sections/SectionSkills/SectionSkillsContainer";
import SectionContactContainer from "@/features/contact/SectionContactContainer";

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
