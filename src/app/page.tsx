import SectionAboutContainer from "@/components/sections/SectionAbout/SectionAboutContainer";
import SectionContact from "@/components/SectionContact";
import SectionHome from "@/components/SectionHome";
import SectionProjects from "@/components/SectionProjects";
import SectionSkills from "@/components/SectionSkills";

export default async function App() {
    return (
        <>
            <SectionHome />
            <SectionAboutContainer />
            <SectionProjects />
            <SectionSkills />
            <SectionContact />
        </>
    );
}
