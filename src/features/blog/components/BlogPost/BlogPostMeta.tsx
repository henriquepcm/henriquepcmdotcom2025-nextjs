import ArrowPath from "@/components/icons/ArrowPath";
import CalendarIcon from "@/components/icons/CalendarIcon";
import UserCircleIcon from "@/components/icons/UserCircleIcon";
import formatDateAndTime from "@/app/utils/formatDateAndTime";

type MetaProps = {
    meta: {
        author: string;
        published: string;
        updated: string;
    };
};

export default function BlogPostMeta({ meta }: MetaProps) {
    const formattedPublished = formatDateAndTime(meta.published);
    const formattedUpdated = formatDateAndTime(meta.updated);

    return (
        <div className="mt-5 flex flex-col justify-between gap-2 md:flex-row">
            <div className="flex gap-2 text-start">
                <div className="mt-1 flex size-[0.875rem] text-brandtextprimary opacity-30">
                    <CalendarIcon />
                </div>
                <div className="flex items-center gap-1 md:flex-col md:items-start md:gap-0 2xl:flex-row 2xl:gap-1">
                    <div>Published: </div>
                    <div className="leading-5 text-brandtextprimary 2xl:leading-6">
                        {formattedPublished}
                    </div>
                </div>
            </div>
            <div className="flex gap-2 text-start">
                <div className="mt-1 flex size-[0.875rem] text-brandtextprimary opacity-30">
                    <ArrowPath />
                </div>
                <div className="flex items-center gap-1 md:flex-col md:items-start md:gap-0 2xl:flex-row 2xl:gap-1">
                    <div>Updated: </div>
                    <div className="leading-5 text-brandtextprimary 2xl:leading-6">
                        {formattedUpdated}
                    </div>
                </div>
            </div>

            <div className="flex gap-2 text-start">
                <div className="mt-1 flex size-[0.875rem] text-brandtextprimary opacity-30">
                    <UserCircleIcon />
                </div>
                <div className="flex items-center gap-1 md:flex-col md:items-start md:gap-0 2xl:flex-row 2xl:gap-1">
                    <div>Author: </div>
                    <div className="leading-5 text-brandtextprimary 2xl:leading-6">
                        {meta.author}
                    </div>
                </div>
            </div>
        </div>
    );
}
