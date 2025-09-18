"use client";

import { useSpring, useInView, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import SkillCard from "./SkillCards/SkillCard";
import { Data } from "@/types/skillsType";

export default function SectionSkillsRender({ data }: { data: Data }) {
  // ––––– Derived Data —————————————————————————
  const section = data.page.title;
  const mainTitle = data.page.titles.mainTitle;
  const secondaryTitle = data.page.titles.secondaryTitle;
  const skillCards = data.technologies.nodes.map((skill) => {
    return {
      id: skill.id,
      label: skill.technologies.label,
      icon: skill.technologies.icon,
    };
  });

  // ––––– Animations —————————————————————————
  const [refSkills, inViewSkills] = useInView({
    rootMargin: "-40% 0%",
  });

  const [styleSkillsRow1, SkillsRow1Api] = useSpring(() => ({
    to: {
      x: inViewSkills ? 200 : 0,
    },
    config: { duration: 10000, friction: 50 },
  }));

  const [styleSkillsRow2, SkillsRow2Api] = useSpring(() => ({
    to: {
      x: inViewSkills ? 200 : 0,
    },
    config: { duration: 10000, friction: 50 },
  }));

  const bindSkillsRow1 = useDrag(
    ({ down, movement: [mx], memo = styleSkillsRow1.x.get() }) => {
      SkillsRow1Api.start({
        x: down ? mx + memo : memo,
        immediate: down,
      });
      styleSkillsRow1.x.set(mx + memo);
      return memo;
    },
    { bounds: { right: 300, left: -684 } }, // area cards move to the right and left
  );

  const bindSkillsRow2 = useDrag(
    ({ down, movement: [mx], memo = styleSkillsRow2.x.get() }) => {
      SkillsRow2Api.start({
        x: down ? mx + memo : memo,
        immediate: down,
      });
      styleSkillsRow2.x.set(mx + memo);
      return memo;
    },
    { bounds: { right: 684, left: -300 } }, // area cards move to the right and left
  );

  return (
    <section
      id="Skills"
      className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] bg-no-repeat [background-position:0%_50%,0%_0%,50%_50%]"
    >
      <div className="h-fit w-10/12 sm:w-8/12">
        <div className="w-10/12 sm:w-8/12">
          <div className="tabtitle">{section}</div>
          <h2>{mainTitle}</h2>
          <p className="mb-5 mt-5">{secondaryTitle}</p>
        </div>
        {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
        <animated.div
          ref={refSkills}
          className="flex w-full flex-col items-center"
        >
          {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
          <animated.div
            {...bindSkillsRow1()}
            style={{
              ...styleSkillsRow1,
              touchAction: "none",
            }}
            className="ml-96 flex flex-row gap-5 hover:cursor-grab"
          >
            {skillCards
              .slice(skillCards.length / 2, skillCards.length)
              .map((skill) => (
                <SkillCard
                  key={skill.id}
                  label={skill.label}
                  icon={skill.icon}
                />
              ))}
          </animated.div>
          {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
          <animated.div
            {...bindSkillsRow2()}
            style={{
              ...styleSkillsRow2,
              touchAction: "none",
            }}
            className="mr-96 mt-10 flex flex-row gap-5 hover:cursor-grab"
          >
            {skillCards.slice(0, skillCards.length / 2).map((skill) => (
              <SkillCard key={skill.id} label={skill.label} icon={skill.icon} />
            ))}
          </animated.div>
        </animated.div>
      </div>
    </section>
  );
}
