import HomeAnimation from "./Animations/HomeAnimation";
import { HomeDataProps } from "./Animations/HomeAnimation";

export default function SectionHomeRender({ data }: HomeDataProps) {
     return (
          <section id="Home" className="flex flex-col min-h-screen w-full">
               <HomeAnimation data={data} />
          </section>
     );
}
