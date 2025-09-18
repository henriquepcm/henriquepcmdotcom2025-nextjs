"use client";

import ExternalLink from "./ExternalLink";
import KiwiAppAnimation from "./Animations/KiwiAppAnimation";
import { Data } from "@/types/aboutTypes";

export default function SectionAboutRender({ data }: { data: Data }) {
  //————— Titles ———————————————
  const section = data.page.title;
  const mainTitle = data.page.titles.mainTitle;
  const secondaryTitle = data.page.titles.secondaryTitle;

  //————— Button ———————————————
  const buttonLabel = data.page.resume.buttonLabel;
  const buttonIcon = data.page.resume.buttonIcon;
  const buttonFilePath = data.page.resume.resumeDownloadLink;

  //————— Career Highlights ———————————————
  const careerHighlights = data.careerHighlights.nodes;
  const highlightsSectionTitle = data.page.resume.highlightsSectionTitle;

  return (
    <section
      id="About"
      className="flex min-h-screen flex-row items-center justify-center bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] bg-no-repeat pt-28 [background-position:70%_40%,0%_0%,100%_50%]"
    >
      <div className="flex flex-row items-center justify-center gap-28">
        <div className="flex w-10/12 flex-col sm:w-8/12">
          <div className="mb-10 flex h-full flex-col gap-10 sm:mb-5 lg:flex-row">
            <div className="lg:w-3/6">
              <div className="tabtitle">{section}</div>
              <h2 className="mb-5">{mainTitle}</h2>
              <p className="mb-5">{secondaryTitle}</p>

              <div className="w-5/6 md:w-3/6 lg:w-5/6 xl:w-4/6">
                <ExternalLink
                  label={buttonLabel}
                  icon={buttonIcon}
                  link={buttonFilePath}
                />
              </div>
            </div>
            <div className="lg:w-3/6">
              <KiwiAppAnimation />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="mb-8">{highlightsSectionTitle}</span>
            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {careerHighlights.map((highlight) => {
                return (
                  <li key={highlight.id}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: highlight.careerHighlights.icon,
                      }}
                      className="mb-3 size-5 text-white"
                    ></div>
                    {highlight.careerHighlights.description}
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
