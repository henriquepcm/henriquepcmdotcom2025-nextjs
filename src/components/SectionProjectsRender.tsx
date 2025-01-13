"use client";

import ExternalLink from "./ExternalLink";
import ProjectAnimation from "./Animations/ProjectAnimation";

export interface ProjectsData {
     documentId: string;
     section: string;
     title: string;
     description: string;
     buttons: {
          id: string;
          label: string;
          icon: string;
          link: string;
     }[];
     projectDetails: {
          id: string;
          title: string;
          description: string;
     }[];
}

interface ProjectsDataProps {
     data: ProjectsData[];
}

export default function SectionProjectsRender({ data }: ProjectsDataProps) {
     return (
          <>
               {data.map((project) => {
                    return (
                         <section
                              id="Projects"
                              key={project.documentId}
                              className="flex flex-col min-h-screen justify-center items-center pt-44 bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] [background-position:50%_10%,100%_70%,0%_0%] bg-no-repeat"
                         >
                              <div className="flex flex-col lg:flex-row lg:gap-10 items-end h-full w-10/12 sm:w-8/12">
                                   <div className="lg:w-3/6">
                                        <div className="tabtitle">
                                             {project.section}
                                        </div>
                                        <h2>{project.title}</h2>
                                        <p className="mt-5">
                                             {project.description}
                                        </p>
                                        <div className="flex flex-col gap-2 mt-5 w-5/6 md:w-3/6 lg:w-11/12 xl:w-4/6">
                                             {project.buttons.map((button) => {
                                                  return (
                                                       <ExternalLink
                                                            key={button.id}
                                                            label={button.label}
                                                            icon={button.icon}
                                                            link={button.link}
                                                       />
                                                  );
                                             })}
                                        </div>
                                   </div>
                                   <div className="lg:w-4/6">
                                        {project.title ===
                                             "Kiwi Monthly Bills Tracker" && (
                                             <ProjectAnimation project="bills" />
                                        )}
                                        {project.title === "Kiwi Stocks" && (
                                             <ProjectAnimation project="stocks" />
                                        )}
                                   </div>
                              </div>
                              <div className="grid md:grid-cols-2 gap-10 lg:mt-20 w-10/12 sm:w-8/12">
                                   {project.projectDetails.map((detail) => {
                                        return (
                                             <div key={detail.id}>
                                                  <h3>{detail.title}</h3>
                                                  <p>{detail.description}</p>
                                             </div>
                                        );
                                   })}
                              </div>
                         </section>
                    );
               })}
          </>
     );
}
