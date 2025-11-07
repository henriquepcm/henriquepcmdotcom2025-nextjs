import SectionContainer from "./SectionContainer";
import SectionExternalLinkButton from "./SectionExternalLinkButton";
import SectionFeaturedImage from "./SectionFeaturedImage";
import SectionArea from "./SectionArea";
import SectionName from "./SectionName";
import SectionSubtitle from "./SectionSubtitle";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";
import SectionInfoBlockItem from "./SectionInfoBlockItem";
import SectionIcon from "./Section.Icon";
import SectionInfoBlockList from "./SectionInfoBlockList";

type SectionProps = {
    id: string;
    children: React.ReactNode;
};

export default function Section({ id, children }: SectionProps) {
    return (
        <section
            id={id}
            className="flex min-h-screen flex-col items-center justify-center py-28"
        >
            {children}
        </section>
    );
}

Section.Title = SectionTitle;
Section.Subtitle = SectionSubtitle;
Section.Name = SectionName;
Section.ExternalLinkButton = SectionExternalLinkButton;
Section.FeaturedImage = SectionFeaturedImage;
Section.Container = SectionContainer;
Section.Text = SectionText;
Section.Area = SectionArea;
Section.InfoBlockItem = SectionInfoBlockItem;
Section.Icon = SectionIcon;
Section.InfoBlockList = SectionInfoBlockList;
