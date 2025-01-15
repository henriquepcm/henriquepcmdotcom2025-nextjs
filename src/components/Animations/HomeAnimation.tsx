"use client";
import { useSpring, useInView, animated } from "@react-spring/web";
import Image from "next/image";

export interface HomeData {
     title: string;
     subtitle: string;
}

export interface HomeDataProps {
     data: HomeData;
}

export default function HomeAnimation({ data }: HomeDataProps) {
     const [refHomeAnimation, inViewHomeAnimation] = useInView({
          rootMargin: "-50% 0%",
     });

     const styleLaptop = useSpring({
          from: {
               opacity: 0,
               filter: "blur(5rem)",
               transform: "scale(0.5)",
               x: -200,
          },
          to: {
               opacity: inViewHomeAnimation ? 1 : 0,
               filter: inViewHomeAnimation ? "blur(0)" : "blur(5rem)",
               transform: inViewHomeAnimation ? "scale(1)" : "scale(0.5)",
               x: inViewHomeAnimation ? 0 : -200,
          },

          delay: 0,
          config: { friction: 50 },
     });

     const stylePhone = useSpring({
          from: {
               opacity: 0,
               filter: "blur(5rem)",
               transform: "scale(0.5)",
               x: 200,
          },
          to: {
               opacity: inViewHomeAnimation ? 1 : 0,
               filter: inViewHomeAnimation ? "blur(0)" : "blur(5rem)",
               transform: inViewHomeAnimation ? "scale(1)" : "scale(0.5)",
               x: inViewHomeAnimation ? 0 : 200,
          },
          delay: 500,
          config: { friction: 50 },
     });

     const styleH1 = useSpring({
          from: {
               opacity: 0,
               y: -10,
          },
          to: {
               opacity: inViewHomeAnimation ? 1 : 0,
               y: inViewHomeAnimation ? 0 : -10,
          },
          delay: 1000,
          config: { friction: 50 },
     });

     const styleRole = useSpring({
          from: {
               opacity: 0,
               y: -10,
          },
          to: {
               opacity: inViewHomeAnimation ? 1 : 0,
               y: inViewHomeAnimation ? 0 : -10,
          },
          delay: 1500,
          config: { friction: 50 },
     });

     return (
          <div className="flex flex-col flex-grow justify-center items-center -translate-y-10 lg:-translate-y-0 relative">
               <animated.div
                    ref={refHomeAnimation}
                    className="flex flex-row items-center translate-y-5"
               >
                    <animated.div
                         style={stylePhone}
                         className="hidden lg:flex flex-col"
                    >
                         <Image
                              priority={true}
                              src="/img/phone-kiwi-sideways-retina.avif"
                              width={120}
                              height={182}
                              alt="Sideways cell phone"
                              className="w-[7rem] -translate-y-5"
                         />

                         <Image
                              priority={true}
                              src="/img/phone-kiwi-sideways-shadow-retina.avif"
                              width={141}
                              height={78}
                              alt=""
                              className="w-[7rem] -translate-y-12 translate-x-12"
                         />
                    </animated.div>

                    <animated.div style={styleLaptop} className="flex flex-col">
                         <Image
                              priority={true}
                              src="/img/laptop-retina.avif"
                              width={362}
                              height={360}
                              alt="Laptop"
                              className="w-[19rem] -translate-y-5 z-20"
                         />

                         <Image
                              fetchPriority="high"
                              src="/img/laptop-shadow-retina.avif"
                              width={438}
                              height={132}
                              alt=""
                              className="w-[19rem] -translate-y-20 -translate-x-4 z-10"
                         />
                    </animated.div>
               </animated.div>
               <div className="flex flex-col items-center text-center absolute z-50 mt-[26rem] w-[18.8rem] lg:w-full">
                    <animated.h1 style={styleRole}>{data.subtitle}</animated.h1>
                    <div className="flex justify-center uppercase text-white text-center leading-[1.5rem] tracking-[0.44rem]">
                         <animated.div style={styleH1}>
                              {data.title}
                         </animated.div>
                    </div>
               </div>
          </div>
     );
}
