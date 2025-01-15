"use client";

import ExternalLink from "./ExternalLink";
import KiwiAppAnimation from "./Animations/KiwiAppAnimation";

export interface AboutData {
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
}

interface AboutDataProps {
     data: AboutData;
}

export default function SectionAboutRender({ data }: AboutDataProps) {
     return (
          <section
               id="About"
               className="flex flex-row justify-center items-center pt-28 min-h-screen bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] [background-position:70%_40%,0%_0%,100%_50%] bg-no-repeat"
          >
               <div className="flex flex-row justify-center items-center gap-28">
                    <div className="flex flex-col w-10/12 sm:w-8/12">
                         <div className="flex flex-col h-full lg:flex-row gap-10 mb-10 sm:mb-5">
                              <div className="lg:w-3/6">
                                   <div className="tabtitle">
                                        {data.section}
                                   </div>
                                   <h2 className="mb-5">{data.title}</h2>
                                   <p className="mb-5">{data.description}</p>

                                   <div className="w-5/6 md:w-3/6 lg:w-5/6 xl:w-4/6">
                                        <ExternalLink
                                             label={data.button.label}
                                             icon={data.button.icon}
                                             link={data.button.link}
                                        />
                                   </div>
                              </div>
                              <div className="lg:w-3/6">
                                   <KiwiAppAnimation />
                              </div>
                         </div>
                         <div className="flex flex-col">
                              <span className="mb-8">
                                   {data.titleCareerThings}
                              </span>
                              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                   {data.careerThings.map((thing) => {
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
