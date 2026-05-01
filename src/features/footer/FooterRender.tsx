import ThemePicker from "@/features/theme-picker/components/ThemePicker";
import { Data } from "@/types/footerTypes";

type FooterRenderProps = {
    data: Data;
    theme: string;
};

export default function FooterRender({ data, theme }: FooterRenderProps) {
    const description = data.page.footer.description;

    return (
        <footer className="mb-10 mt-56 flex h-40 w-full justify-center">
            <div className="flex w-10/12 max-w-[1600px] flex-col items-center justify-between gap-10 sm:flex-row">
                <div className="flex w-full flex-col sm:w-6/12 md:w-9/12 lg:w-10/12">
                    <div>
                        {description}-{new Date().getFullYear()}.{" "}
                        <a
                            className="underline"
                            href="https://github.com/henriquepcm/henriquepcmdotcom2025-nextjs"
                            target="blank"
                        >
                            Fork my site
                        </a>{" "}
                        on GitHub.{" "}
                        <a
                            className="underline"
                            href="https://wordpress.org/"
                            target="blank"
                        >
                            WordPress
                        </a>{" "}
                        as a headless CMS.
                    </div>
                </div>
                <div className="relative flex w-full items-center justify-end sm:w-6/12 md:w-3/12 lg:w-2/12">
                    <ThemePicker theme={theme} />
                </div>
            </div>
        </footer>
    );
}
