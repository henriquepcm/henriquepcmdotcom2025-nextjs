import { useSpring, useInView, animated } from "@react-spring/web";
import Image from "next/image";

type ProjectAnimationProps = {
     project: "bills" | "stocks";
};

const projectImages = {
     bills: {
          desktopHomeScreen: {
               src: "/img/kiwi-bills-desktop-home-screen-retina.avif",
               alt: "Desktop home screen of the project Kiwi Monthly Bills Tracker",
          },
          mobileHomeScreen: {
               src: "/img/kiwi-bills-mobile-home-screen-retina.avif",
               alt: "Mobile Home screen of the project Kiwi Monthly Bills Tracker",
          },
          mobileSecondaryScreen: {
               src: "/img/kiwi-bills-mobile-secondary-screen-retina.avif",
               alt: "Mobile secondary screen of the project Kiwi Monthly Bills Tracker",
          },
     },
     stocks: {
          desktopHomeScreen: {
               src: "/img/kiwi-stocks-desktop-home-screen-retina.avif",
               alt: "Desktop home screen of the project Kiwi Stocks",
          },
          mobileHomeScreen: {
               src: "/img/kiwi-stocks-mobile-home-screen-retina.avif",
               alt: "Mobile Home screen of the project Kiwi Stocks",
          },
          mobileSecondaryScreen: {
               src: "/img/kiwi-stocks-mobile-secondary-screen-retina.avif",
               alt: "Mobile secondary screen of the project Kiwi Stocks",
          },
     },
};

export default function ProjectAnimation({ project }: ProjectAnimationProps) {
     const image = projectImages[project];

     const [refProject, inViewProject] = useInView({
          rootMargin: "-40% 0%",
     });

     const styleMobileHomeScreen = useSpring({
          to: {
               y: inViewProject ? 10 : -100,
          },

          config: { friction: 50 },
     });

     const styleMobileHomeScreenShadow = useSpring({
          to: {
               transform: inViewProject ? "scale(1)" : "scale(0)",
          },

          config: { friction: 50 },
     });

     const styleMobileSecondaryScreen = useSpring({
          to: {
               y: inViewProject ? 10 : -100,
          },
          delay: 100,
          config: { friction: 50 },
     });

     const styleMobileSecondaryScreenShadow = useSpring({
          to: {
               transform: inViewProject ? "scale(1)" : "scale(0)",
          },
          delay: 100,
          config: { friction: 50 },
     });

     const styleDesktopScreen = useSpring({
          to: {
               y: inViewProject ? -20 : 10,
          },
          delay: 200,
          config: { friction: 50 },
     });

     const styleDesktopScreenShadow = useSpring({
          from: { transform: "scale(1)" },
          to: {
               transform: inViewProject ? "scale(0)" : "scale(1)",
          },
          delay: 200,
          config: { friction: 50 },
     });

     return (
          <animated.div
               ref={refProject}
               className="flex items-center lg:items-end justify-center lg:h-[20rem] h-[30rem] relative"
          >
               <div className="md:w-5/6 lg:w-full">
                    <div>
                         <animated.div style={styleDesktopScreen}>
                              <Image
                                   src={image.desktopHomeScreen.src}
                                   width={1376}
                                   height={757}
                                   alt={image.desktopHomeScreen.alt}
                                   className="md:w-5/6 lg:w-full"
                                   loading="lazy"
                              />
                         </animated.div>
                         <animated.div style={styleDesktopScreenShadow}>
                              <Image
                                   src="/img/desktop-screen-shadow-retina.avif"
                                   width={708}
                                   height={55}
                                   className="md:w-5/6 lg:w-full"
                                   loading="lazy"
                                   alt=""
                              />
                         </animated.div>
                    </div>
                    <div className="-translate-y-72 translate-x-5">
                         <div className="absolute mt-24">
                              <animated.div style={styleMobileSecondaryScreen}>
                                   <Image
                                        src={image.mobileSecondaryScreen.src}
                                        width={177}
                                        height={365}
                                        alt={image.mobileSecondaryScreen.alt}
                                        className="w-[6.1rem]"
                                        loading="lazy"
                                   />
                              </animated.div>
                              <animated.div
                                   style={styleMobileSecondaryScreenShadow}
                              >
                                   <Image
                                        src="/img/phone-shadow-retina.avif"
                                        width={195}
                                        height={42}
                                        className="w-[6.1rem]"
                                        loading="lazy"
                                        alt=""
                                   />
                              </animated.div>
                         </div>
                         <div className="absolute ml-16 mt-28">
                              <animated.div style={styleMobileHomeScreen}>
                                   <Image
                                        src={image.mobileHomeScreen.src}
                                        width={178}
                                        height={366}
                                        alt={image.mobileHomeScreen.alt}
                                        className="w-[6.1rem]"
                                        loading="lazy"
                                   />
                              </animated.div>
                              <animated.div style={styleMobileHomeScreenShadow}>
                                   <Image
                                        src="/img/phone-shadow-retina.avif"
                                        width={195}
                                        height={42}
                                        className="w-[6.1rem]"
                                        loading="lazy"
                                        alt=""
                                   />
                              </animated.div>
                         </div>
                    </div>
               </div>
          </animated.div>
     );
}
