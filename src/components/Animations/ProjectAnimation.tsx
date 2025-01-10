import { useSpring, useInView, animated } from "@react-spring/web";

type ProjectAnimationProps = {
     project: "bills" | "stocks";
};

const projectImages = {
     bills: {
          desktopHomeScreen: {
               src: "./img/kiwi-bills-desktop-home-screen.avif",
               srcSet: "./img/kiwi-bills-desktop-home-screen.avif 1x, ./img/kiwi-bills-desktop-home-screen-retina.avif 2x",
               alt: "Desktop home screen of the project Kiwi Monthly Bills Tracker",
          },
          mobileHomeScreen: {
               src: "./img/kiwi-bills-mobile-home-screen.avif",
               srcSet: "./img/kiwi-bills-mobile-home-screen.avif 1x, ./img/kiwi-bills-mobile-home-screen-retina.avif 2x",
               alt: "Mobile Home screen of the project Kiwi Monthly Bills Tracker",
          },
          mobileSecondaryScreen: {
               src: "./img/kiwi-bills-mobile-secondary-screen.avif",
               srcSet: "./img/kiwi-bills-mobile-secondary-screen.avif 1x, ./img/kiwi-bills-mobile-secondary-screen-retina.avif 2x",
               alt: "Mobile secondary screen of the project Kiwi Monthly Bills Tracker",
          },
     },
     stocks: {
          desktopHomeScreen: {
               src: "./img/kiwi-stocks-desktop-home-screen.avif",
               srcSet: "./img/kiwi-stocks-desktop-home-screen.avif 1x, ./img/kiwi-stocks-desktop-home-screen-retina.avif 2x",
               alt: "Desktop home screen of the project Kiwi Stocks",
          },
          mobileHomeScreen: {
               src: "./img/kiwi-stocks-mobile-home-screen.avif",
               srcSet: "./img/kiwi-stocks-mobile-home-screen.avif 1x, ./img/kiwi-stocks-mobile-home-screen-retina.avif 2x",
               alt: "Mobile Home screen of the project Kiwi Stocks",
          },
          mobileSecondaryScreen: {
               src: "./img/kiwi-stocks-mobile-secondary-screen.avif",
               srcSet: "./img/kiwi-stocks-mobile-secondary-screen.avif 1x, ./img/kiwi-stocks-mobile-secondary-screen-retina.avif 2x",
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
                         <animated.img
                              style={styleDesktopScreen}
                              src={image.desktopHomeScreen.src}
                              srcSet={image.desktopHomeScreen.srcSet}
                              alt={image.desktopHomeScreen.alt}
                              className="md:w-5/6 lg:w-full"
                              loading="lazy"
                         />
                         <animated.img
                              style={styleDesktopScreenShadow}
                              src="./img/desktop-screen-shadow.avif"
                              srcSet="./img/desktop-screen-shadow.avif 1x, ./img/desktop-screen-shadow-retina.avif 2x"
                              className="md:w-5/6 lg:w-full"
                              loading="lazy"
                              alt=""
                         />
                    </div>
                    <div className="-translate-y-72 translate-x-5">
                         <div className="absolute mt-24">
                              <animated.img
                                   style={styleMobileSecondaryScreen}
                                   src={image.mobileSecondaryScreen.src}
                                   srcSet={image.mobileSecondaryScreen.srcSet}
                                   alt={image.mobileSecondaryScreen.alt}
                                   className="w-[6.1rem]"
                                   loading="lazy"
                              />
                              <animated.img
                                   style={styleMobileSecondaryScreenShadow}
                                   src="./img/phone-shadow.avif"
                                   srcSet="./img/phone-shadow.avif 1x, ./img/phone-shadow-retina.avif 2x"
                                   className="w-[6.1rem]"
                                   loading="lazy"
                                   alt=""
                              />
                         </div>
                         <div className="absolute ml-16 mt-28">
                              <animated.img
                                   style={styleMobileHomeScreen}
                                   src={image.mobileHomeScreen.src}
                                   srcSet={image.mobileHomeScreen.srcSet}
                                   alt={image.mobileHomeScreen.alt}
                                   className="w-[6.1rem]"
                                   loading="lazy"
                              />
                              <animated.img
                                   style={styleMobileHomeScreenShadow}
                                   src="./img/phone-shadow.avif"
                                   srcSet="./img/phone-shadow.avif 1x, ./img/phone-shadow-retina.avif 2x"
                                   className="w-[6.1rem]"
                                   loading="lazy"
                                   alt=""
                              />
                         </div>
                    </div>
               </div>
          </animated.div>
     );
}
