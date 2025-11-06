import { Data } from "@/types/homeTypes";
import HomeAnimation from "./Animations/HomeAnimation";

export default function SectionHomeRender({ data }: { data: Data }) {
    const titles = data.page.titles;

    return (
        <section id="Home" className="flex min-h-screen w-full flex-col">
            <HomeAnimation titles={titles} />
        </section>
    );
}
