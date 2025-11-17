import SectionAboutContainer from "@/components/sections/SectionAbout/SectionAboutContainer";
import SectionContact from "@/components/SectionContact";
import SectionProjectsContainer from "@/components/sections/SectionProjects/SectionProjectsContainer";
import SectionHomeContainer from "@/components/sections/SectionHome/SectionHomeContainer";
import SectionSkillsContainer from "@/components/sections/SectionSkills/SectionSkillsContainer";

export default async function App() {
    return (
        <>
            <SectionHomeContainer />
            <SectionAboutContainer />
            <SectionProjectsContainer />
            <SectionSkillsContainer />
            <SectionContact />
        </>
    );
}
