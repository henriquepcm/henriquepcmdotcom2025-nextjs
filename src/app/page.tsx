import SectionAbout from "@/components/SectionAbout";
import SectionContact from "@/components/SectionContact";
import SectionHome from "@/components/SectionHome";
import SectionProjects from "@/components/SectionProjects";
import SectionSkills from "@/components/SectionSkills";

export default async function App() {
  return (
    <>
      <SectionHome />
      <SectionAbout />
      <SectionProjects />
      <SectionSkills />
      <SectionContact />
    </>
  );
}
