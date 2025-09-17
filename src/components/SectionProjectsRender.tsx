"use client";

import ExternalLink from "./ExternalLink";
import ProjectAnimation from "./Animations/ProjectAnimation";
import { Data } from "@/types/projectsTypes";

export default function SectionProjectsRender({ data }: { data: Data }) {
     const sectionTitle = data.page.title;
     const projects = data.projects.nodes;

     return (
          <>
               {projects.map((project) => {
                    const projectID = project.id;
                    const projectTitle = project.projects.title;
                    const projectDescription = project.projects.description;
                    const projectButtons = [
                         {
                              id: `${projectID}-btn1`,
                              label: project.projects.buttonLabel1,
                              icon: project.projects.buttonIcon1,
                              link: project.projects.buttonLink1,
                         },
                         {
                              id: `${projectID}-btn2`,
                              label: project.projects.buttonLabel2,
                              icon: project.projects.buttonIcon2,
                              link: project.projects.buttonLink2,
                         },
                    ];
                    const projectDetails = [
                         {
                              id: `${projectID}-detail1`,
                              label: project.projects.labelItem1,
                              description: project.projects.descriptionItem1,
                         },
                         {
                              id: `${projectID}-detail2`,
                              label: project.projects.labelItem2,
                              description: project.projects.descriptionItem2,
                         },
                         {
                              id: `${projectID}-detail3`,
                              label: project.projects.labelItem3,
                              description: project.projects.descriptionItem3,
                         },
                         {
                              id: `${projectID}-detail4`,
                              label: project.projects.labelItem4,
                              description: project.projects.descriptionItem4,
                         },
                         {
                              id: `${projectID}-detail5`,
                              label: project.projects.labelItem5,
                              description: project.projects.descriptionItem5,
                         },
                         {
                              id: `${projectID}-detail6`,
                              label: project.projects.labelItem6,
                              description: project.projects.descriptionItem6,
                         },
                    ];

                    return (
                         <section
                              id="Projects"
                              key={projectID}
                              className="flex flex-col min-h-screen justify-center items-center pt-28 bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] [background-position:50%_10%,100%_70%,0%_0%] bg-no-repeat"
                         >
                              <div className="flex flex-col lg:flex-row lg:gap-10 items-end h-full w-10/12 sm:w-8/12">
                                   <div className="lg:w-3/6">
                                        <div className="tabtitle">
                                             {sectionTitle}
                                        </div>
                                        <h2>{projectTitle}</h2>
                                        <p className="mt-5">
                                             {projectDescription}
                                        </p>
                                        <div className="flex flex-col gap-2 mt-5 w-5/6 md:w-3/6 lg:w-11/12 xl:w-4/6">
                                             {projectButtons.map((button) => {
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
                                        {projectTitle ===
                                             "Kiwi Monthly Bills Tracker" && (
                                             <ProjectAnimation project="bills" />
                                        )}
                                        {projectTitle === "Kiwi Stocks" && (
                                             <ProjectAnimation project="stocks" />
                                        )}
                                   </div>
                              </div>
                              <div className="grid md:grid-cols-2 gap-10 lg:mt-20 w-10/12 sm:w-8/12">
                                   {projectDetails.map((detail) => {
                                        return (
                                             <div key={detail.id}>
                                                  <h3>{detail.label}</h3>
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
