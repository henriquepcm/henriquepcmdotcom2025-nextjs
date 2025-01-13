import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionAbout from "@/components/SectionAbout";
import SectionContact from "@/components/SectionContact";
import SectionHome from "@/components/SectionHome";
import SectionProjects from "@/components/SectionProjects";
import SectionSkills from "@/components/SectionSkills";
export default async function App() {
     return (
          <div className="w-full max-w-[1920px]">
               <Header />
               <main>
                    <SectionHome />
                    <SectionAbout />
                    <SectionProjects />
                    <SectionSkills />
                    <SectionContact />
               </main>
               <Footer />
          </div>
     );
}
