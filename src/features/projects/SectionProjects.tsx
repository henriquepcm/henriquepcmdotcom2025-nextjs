"use client";
import ProjectAnimation from "@/features/projects/SectionProjectsAnimations";
import Section from "@/features/section/components/Section";
import { Projects } from "./SectionProjects.types";

export default function SectionProjects({ projects }: { projects: Projects }) {
    return (
        <div id="Projects">
            {projects.map((project) => {
                return (
                    <Section id={project.sectionId} key={project.id}>
                        <Section.Container className="lg:justiy-center flex w-10/12 flex-col gap-10 lg:flex-row">
                            <Section.Area className="lg:w-3/6 xl:translate-y-12">
                                <Section.Name name="Projects" />
                                <Section.Title>{project.title}</Section.Title>
                                <Section.Subtitle>
                                    {project.description}
                                </Section.Subtitle>
                                {project.buttons.map((button) => {
                                    const { id, label, link, icon } = button;

                                    return (
                                        <Section.ExternalLinkButton
                                            key={id}
                                            label={label}
                                            link={link}
                                            className="mb-2 w-5/6 md:w-3/6 lg:w-4/6 xl:w-4/6 2xl:w-3/6"
                                            icon={icon}
                                        />
                                    );
                                })}
                            </Section.Area>
                            <Section.Area className="pt-5 lg:w-3/6">
                                <ProjectAnimation id={project.id} />
                            </Section.Area>
                        </Section.Container>
                        <Section.Container className="mt-20 flex w-10/12 flex-col gap-10">
                            <Section.InfoBlockList className="grid gap-10 sm:grid-cols-2">
                                {project.infoBlockItems.map((item) => {
                                    const { id, label, description } = item;

                                    return (
                                        <Section.InfoBlockItem key={id}>
                                            <Section.InfoBlockItemTitle>
                                                {label}
                                            </Section.InfoBlockItemTitle>
                                            <Section.Text>
                                                {description}
                                            </Section.Text>
                                        </Section.InfoBlockItem>
                                    );
                                })}
                            </Section.InfoBlockList>
                        </Section.Container>
                    </Section>
                );
            })}
        </div>
    );
}
