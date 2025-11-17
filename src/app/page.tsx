import SectionAboutContainer from "@/components/sections/SectionAbout/SectionAboutContainer";
import SectionContact from "@/components/SectionContact";
import SectionSkills from "@/components/SectionSkills";
import SectionProjectsContainer from "@/components/sections/SectionProjects/SectionProjectsContainer";
import SectionHomeContainer from "@/components/sections/SectionHome/SectionHomeContainer";

export default async function App() {
    return (
        <>
            <SectionHomeContainer />
            <SectionAboutContainer />
            <SectionProjectsContainer />
            <SectionSkills />
            <SectionContact />
        </>
    );
}
