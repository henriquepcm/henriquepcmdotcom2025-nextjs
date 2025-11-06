import { Data } from "@/types/footerTypes";
import ThemePicker from "./ThemePicker";

type FooterRenderProps = {
    data: Data;
    theme: string;
};

export default function FooterRender({ data, theme }: FooterRenderProps) {
    const icon = data.page.footer.icon;
    const description = data.page.footer.description;

    return (
        <footer className="mb-10 mt-56 flex h-40 w-full justify-center">
            <div className="flex w-10/12 max-w-[1600px] items-center justify-between">
                <div className="flex w-6/12 flex-col">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: icon,
                        }}
                        className="mb-2 size-[1.1rem] text-brandtextsecondary"
                    ></div>
                    <div>
                        {description}-{new Date().getFullYear()}.
                    </div>
                </div>
                <div className="relative flex w-6/12 items-center justify-end">
                    <ThemePicker theme={theme} />
                </div>
            </div>
        </footer>
    );
}
