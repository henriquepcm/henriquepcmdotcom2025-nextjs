import { Data } from "@/types/footerTypes";

export default function FooterRender({ data }: { data: Data }) {
  const icon = data.page.footer.icon;
  const description = data.page.footer.description;

  return (
    <footer className="flex h-96 w-full items-end justify-center pb-10">
      <div className="flex w-10/12 flex-col lg:w-8/12">
        <div
          dangerouslySetInnerHTML={{
            __html: icon,
          }}
          className="mb-2 size-[1.1rem] text-white"
        ></div>
        <div>
          {description}-{new Date().getFullYear()}.
        </div>
      </div>
    </footer>
  );
}
