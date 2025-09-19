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
            className="flex min-h-screen flex-col items-center justify-center py-28"
          >
            <div className="flex h-full w-10/12 flex-col items-end sm:w-8/12 lg:flex-row lg:gap-10">
              <div className="lg:w-3/6">
                <div className="tabtitle">{sectionTitle}</div>
                <h2>{projectTitle}</h2>
                <p className="mt-5">{projectDescription}</p>
                <div className="mt-5 flex w-5/6 flex-col gap-2 md:w-3/6 lg:w-11/12 xl:w-4/6">
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
                {projectTitle === "Kiwi Monthly Bills Tracker" && (
                  <ProjectAnimation project="bills" />
                )}
                {projectTitle === "Kiwi Stocks" && (
                  <ProjectAnimation project="stocks" />
                )}
              </div>
            </div>
            <div className="grid w-10/12 gap-10 sm:w-8/12 md:grid-cols-2 lg:mt-20">
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
