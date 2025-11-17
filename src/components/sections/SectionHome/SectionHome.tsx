import HomeAnimation from "@/components/sections/SectionHome/SectionHomeAnimation";
import Section from "@/features/section/components/Section";
import { HomeTitles } from "./SectionHome.types";

export default function SectionHome({ titles }: { titles: HomeTitles }) {
    return (
        <Section id="Home">
            <Section.FeaturedImage>
                <HomeAnimation titles={titles} />
            </Section.FeaturedImage>
        </Section>
    );
}
