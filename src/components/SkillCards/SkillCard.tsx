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
               translateY: inViewCard
                    ? isHovered
                         ? 0
                         : 10
                    : isHovered
                    ? 10
                    : 0,
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
          <animated.div
               ref={refCard}
               style={styleCard}
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
               className="flex flex-col border border-henriquepcmbasepurple group w-[11.25rem] h-[6.25rem] rounded-md ease-in-out duration-300 hover:bg-henriquepcmbasepurple hover:border-henriquepcmdarkpurple hover:scale-95 hover:translate-y-2"
          >
               <div
                    dangerouslySetInnerHTML={{ __html: icon }}
                    className="w-[1.3rem] h-[50%] mt-[1.3rem] ml-[1.3rem] group-hover:mt-[1.5rem] group-hover:scale-95 ease-in-out duration-300"
               ></div>
               <div className="h-[50%] ml-[1.3rem] text-[0.6rem] group-hover:ml-[1.2rem] group-hover:mt-[-0.1rem] group-hover:-translate-y-[0.6rem] group-hover:scale-95 ease-in-out duration-300">
                    {label}
               </div>
          </animated.div>
     );
}
