import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { gql, useQuery } from "@apollo/client";
import { useSpring, useInView, animated } from "@react-spring/web";
import { onErrorProps } from "../Error/ErrorType";

interface HomeData {
     home: {
          title: string;
          subtitle: string;
     };
}

const GET_HOME_DATA = gql`
     query Home {
          home {
               title
               subtitle
          }
     }
`;

export default function HomeAnimation({ onError }: onErrorProps) {
     const { loading, error, data } = useQuery<HomeData>(GET_HOME_DATA);

     if (error) {
          onError(error);
          console.error(error.message);
          return;
     }

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
                    {loading ? (
                         <Skeleton
                              width={112}
                              height={231.66}
                              aria-label="Loading content..."
                         />
                    ) : (
                         <>
                              <animated.div
                                   style={stylePhone}
                                   className="hidden lg:flex flex-col"
                              >
                                   <picture>
                                        <source
                                             srcSet="./img/phone-kiwi-sideways-retina.avif"
                                             media="(min-resolution: 2dppx)"
                                        />
                                        <img
                                             fetchPriority="high"
                                             src="./img/phone-kiwi-sideways-regular.avif"
                                             alt="Sideways cell phone"
                                             className="w-[7rem] -translate-y-5"
                                        />
                                   </picture>

                                   <picture>
                                        <source
                                             srcSet="./img/phone-kiwi-sideways-shadow-retina.avif"
                                             media="(min-resolution: 2dppx)"
                                        />
                                        <img
                                             fetchPriority="high"
                                             src="./img/phone-kiwi-sideways-shadow.avif"
                                             alt=""
                                             className="w-[7rem] -translate-y-12 translate-x-12"
                                        />
                                   </picture>
                              </animated.div>
                         </>
                    )}

                    {loading ? (
                         <Skeleton
                              width={304}
                              height={393.445}
                              aria-label="Loading content..."
                         />
                    ) : (
                         <animated.div
                              style={styleLaptop}
                              className="flex flex-col"
                         >
                              <picture>
                                   <source
                                        srcSet="./img/laptop-retina.avif"
                                        media="(min-resolution: 2dppx)"
                                   />
                                   <img
                                        fetchPriority="high"
                                        src="./img/laptop-regular.avif"
                                        alt="Laptop"
                                        className="w-[19rem] -translate-y-5 z-20"
                                   />
                              </picture>

                              <picture>
                                   <source
                                        srcSet="./img/laptop-shadow-retina.avif"
                                        media="(min-resolution: 2dppx)"
                                   />
                                   <img
                                        fetchPriority="high"
                                        src="./img/laptop-shadow.avif"
                                        alt=""
                                        className="w-[19rem] -translate-y-20 -translate-x-4 z-10"
                                   />
                              </picture>
                         </animated.div>
                    )}
               </animated.div>

               <div className="flex flex-col items-center absolute z-50 mt-[26rem] w-[18.8rem] lg:w-full">
                    {loading ? (
                         <>
                              <div className="flex flex-col items-center lg:hidden">
                                   <Skeleton
                                        width={125}
                                        height={30}
                                        aria-label="Loading content..."
                                   />
                                   <Skeleton
                                        width={250}
                                        height={30}
                                        aria-label="Loading content..."
                                   />
                                   <Skeleton
                                        width={250}
                                        height={30}
                                        aria-label="Loading content..."
                                   />
                                   <div className="mt-2">
                                        <Skeleton width={250} height={15} />
                                   </div>
                              </div>

                              <div className="lg:flex flex-col items-center hidden">
                                   <Skeleton
                                        width={695}
                                        height={30}
                                        aria-label="Loading content..."
                                   />
                                   <div className="mt-2">
                                        <Skeleton
                                             width={250}
                                             height={15}
                                             aria-label="Loading content..."
                                        />
                                   </div>
                              </div>
                         </>
                    ) : (
                         <>
                              <animated.h1
                                   style={styleRole}
                                   className="flex justify-center items-center text-center leading-8"
                              >
                                   {data?.home.subtitle}
                              </animated.h1>
                              <div className="flex justify-center uppercase text-white text-center leading-[1.5rem] tracking-[0.44rem]">
                                   <animated.div style={styleH1}>
                                        {data?.home.title}
                                   </animated.div>
                              </div>
                         </>
                    )}
               </div>
          </div>
     );
}
