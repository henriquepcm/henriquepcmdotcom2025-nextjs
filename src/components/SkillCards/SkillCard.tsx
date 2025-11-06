import { useSpring, useInView, animated } from "@react-spring/web";
import { useState } from "react";

interface SkillCardProps {
    icon: string;
    label: string;
}

export default function SkillCard({ icon, label }: SkillCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const [refCard, inViewCard] = useInView({
        rootMargin: "-26% 0%",
    });

    const styleCard = useSpring({
        to: {
            transform: inViewCard
                ? isHovered
                    ? "scale(0.95)"
                    : "scale(1)"
                : isHovered
                  ? "scale(1)"
                  : "scale(0.95)",
            translateY: inViewCard ? (isHovered ? 0 : 10) : isHovered ? 10 : 0,
            boxShadow: inViewCard
                ? isHovered
                    ? "-1px 2px 2px rgba(0,0,0,0.4)"
                    : "-15px 20px 20px rgba(0,0,0,0.4)]"
                : isHovered
                  ? "-15px 20px 20px rgba(0,0,0,0.4)]"
                  : "-1px 2px 2px rgba(0,0,0,0.4)",
        },

        config: { duration: 300, friction: 50 },
    });

    return (
        <>
            {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
            <animated.div
                ref={refCard}
                style={styleCard}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group flex h-[6.25rem] w-[11.25rem] flex-col rounded-md border border-brandborder duration-300 ease-in-out hover:translate-y-2 hover:scale-95 hover:bg-brandaccent"
            >
                <div
                    dangerouslySetInnerHTML={{ __html: icon }}
                    className="ml-[1.3rem] mt-[1.3rem] h-[50%] w-[1.3rem] duration-300 ease-in-out group-hover:mt-[1.5rem] group-hover:scale-95"
                ></div>
                <div className="ml-[1.3rem] h-[50%] text-[0.6rem] duration-300 ease-in-out group-hover:ml-[1.2rem] group-hover:mt-[-0.1rem] group-hover:-translate-y-[0.6rem] group-hover:scale-95">
                    {label}
                </div>
            </animated.div>
        </>
    );
}
