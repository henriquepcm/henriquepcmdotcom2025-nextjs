import { gql, useQuery } from "@apollo/client";
import { onErrorProps } from "./Error/ErrorType";

interface FooterData {
     footer: {
          icon: string;
          text: string;
     };
}

const GET_FOOTER_DATA = gql`
     query Footer {
          footer {
               icon
               text
          }
     }
`;

export default function Footer({ onError }: onErrorProps) {
     const { loading, error, data } = useQuery<FooterData>(GET_FOOTER_DATA);

     if (error) {
          onError(error);
          console.error(error.message);
          return;
     }

     if (loading) {
          return;
     }

     return (
          <footer className="flex items-end justify-center w-full h-96 pb-10">
               {data && (
                    <div className="flex flex-col w-10/12 lg:w-8/12">
                         <div
                              dangerouslySetInnerHTML={{
                                   __html: data.footer.icon,
                              }}
                              className="size-[1.1rem] text-white mb-2"
                         ></div>
                         <div>
                              {data.footer.text}-{new Date().getFullYear()}.
                         </div>
                    </div>
               )}
          </footer>
     );
}
