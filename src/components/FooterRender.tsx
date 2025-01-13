export interface FooterData {
     icon: string;
     text: string;
}

interface FooterDataProps {
     data: FooterData;
}

export default function FooterRender({ data }: FooterDataProps) {
     return (
          <footer className="flex items-end justify-center w-full h-96 pb-10">
               <div className="flex flex-col w-10/12 lg:w-8/12">
                    <div
                         dangerouslySetInnerHTML={{
                              __html: data.icon,
                         }}
                         className="size-[1.1rem] text-white mb-2"
                    ></div>
                    <div>
                         {data.text}-{new Date().getFullYear()}.
                    </div>
               </div>
          </footer>
     );
}
