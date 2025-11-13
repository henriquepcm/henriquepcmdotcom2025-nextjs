import SectionAboutContainer from "@/components/sections/SectionAbout/SectionAboutContainer";
import SectionContact from "@/components/SectionContact";
import SectionHome from "@/components/SectionHome";
import SectionSkills from "@/components/SectionSkills";
import SectionProjectsContainer from "@/components/sections/SectionProject/SectionProjectsContainer";

export default async function App() {
    return (
        <>
            <SectionHome />
            <SectionAboutContainer />
            <SectionProjectsContainer />
            <SectionSkills />
            <SectionContact />
        </>
    );
}
