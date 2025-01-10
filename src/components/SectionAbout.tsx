import ExternalLink from "./ExternalLink";
import KiwiAppAnimation from "./Animations/KiwiAppAnimation";
import { gql, useQuery } from "@apollo/client";
import { onErrorProps } from "./Error/ErrorType";

interface AboutData {
     about: {
          section: string;
          title: string;
          description: string;
          careerThings: {
               id: string;
               description: string;
               icon: string;
          }[];
          button: {
               label: string;
               icon: string;
               link: string;
          };
          titleCareerThings: string;
     };
}

const GET_ABOUT_DATA = gql`
     query About {
          about {
               section
               title
               description
               careerThings {
                    id
                    description
                    icon
               }
               button {
                    id
                    label
                    icon
                    link
               }
               titleCareerThings
          }
     }
`;

export default function SectionAbout({ onError }: onErrorProps) {
     const { error, loading, data } = useQuery<AboutData>(GET_ABOUT_DATA);

     if (error) {
          onError(error);
          console.error(error.message);
          return;
     }

     if (loading) {
          return;
     }

     return (
          <section
               id="About"
               className="flex flex-row justify-center items-center pt-44 min-h-screen bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] [background-position:70%_40%,0%_0%,100%_50%] bg-no-repeat"
          >
               <div className="flex flex-row justify-center items-center gap-28">
                    <div className="flex flex-col w-10/12 sm:w-8/12">
                         <div className="flex flex-col h-full lg:flex-row gap-10 mb-10 sm:mb-5">
                              <div className="lg:w-3/6">
                                   <div className="tabtitle">
                                        {data?.about.section}
                                   </div>
                                   <h2 className="mb-5">{data?.about.title}</h2>
                                   <p className="mb-5">
                                        {data?.about.description}
                                   </p>

                                   <div className="w-5/6 md:w-3/6 lg:w-5/6 xl:w-4/6">
                                        {data && (
                                             <ExternalLink
                                                  label={
                                                       data.about.button.label
                                                  }
                                                  icon={data.about.button.icon}
                                                  link={data.about.button.link}
                                             />
                                        )}
                                   </div>
                              </div>
                              <div className="lg:w-3/6">
                                   <KiwiAppAnimation />
                              </div>
                         </div>
                         <div className="flex flex-col">
                              <span className="mb-8">
                                   {data?.about.titleCareerThings}
                              </span>
                              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                   {data?.about.careerThings.map((thing) => {
                                        return (
                                             <li key={thing.id}>
                                                  <div
                                                       dangerouslySetInnerHTML={{
                                                            __html: thing.icon,
                                                       }}
                                                       className="text-white mb-3 size-5"
                                                  ></div>
                                                  {thing.description}
                                             </li>
                                        );
                                   })}
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
}
