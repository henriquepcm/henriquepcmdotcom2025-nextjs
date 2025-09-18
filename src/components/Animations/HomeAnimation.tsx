"use client";
import { Titles } from "@/types/shared/sharedTypes";
import { useSpring, useInView, animated } from "@react-spring/web";
import Image from "next/image";

export default function HomeAnimation({ titles }: { titles: Titles }) {
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
    <div className="relative flex flex-grow -translate-y-10 flex-col items-center justify-center lg:-translate-y-0">
      {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
      <animated.div
        ref={refHomeAnimation}
        className="flex translate-y-5 flex-row items-center"
      >
        {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
        <animated.div style={stylePhone} className="hidden flex-col lg:flex">
          <Image
            priority={true}
            fetchPriority="high"
            src="/img/phone-kiwi-sideways-retina.avif"
            width={120}
            height={182}
            alt="Sideways cell phone"
            className="w-[7rem] -translate-y-5"
          />

          <Image
            priority={true}
            fetchPriority="high"
            src="/img/phone-kiwi-sideways-shadow-retina.avif"
            width={141}
            height={78}
            alt=""
            className="w-[7rem] -translate-y-12 translate-x-12"
          />
        </animated.div>

        {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
        <animated.div style={styleLaptop} className="flex flex-col">
          <Image
            priority={true}
            fetchPriority="high"
            src="/img/laptop-retina.avif"
            width={304}
            height={303}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 304px"
            alt="Laptop"
            className="z-20 w-[19rem] -translate-y-5"
          />

          <Image
            priority={true}
            fetchPriority="high"
            src="/img/laptop-shadow-retina.avif"
            width={438}
            height={132}
            alt=""
            className="z-10 w-[19rem] -translate-x-4 -translate-y-20"
          />
        </animated.div>
      </animated.div>
      <div className="absolute z-50 mt-[26rem] flex w-[18.8rem] flex-col items-center text-center lg:w-full">
        {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
        <animated.h1 style={styleRole}>{titles.mainTitle}</animated.h1>
        <div className="flex justify-center text-center uppercase leading-[1.5rem] tracking-[0.44rem] text-white">
          {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
          <animated.div style={styleH1}>{titles.secondaryTitle}</animated.div>
        </div>
      </div>
    </div>
  );
}
