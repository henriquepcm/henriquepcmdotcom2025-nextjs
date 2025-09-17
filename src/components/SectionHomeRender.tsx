import { Data } from "@/types/homeTypes";
import HomeAnimation from "./Animations/HomeAnimation";

export default function SectionHomeRender({ data }: { data: Data }) {
     const titles = data.page.titles;

     return (
          <section id="Home" className="flex flex-col min-h-screen w-full">
               <HomeAnimation titles={titles} />
          </section>
     );
}
