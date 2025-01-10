import { useSpring, useInView, animated } from "@react-spring/web";

export default function KiwiAppAnimation() {
     const [refPhone, inViewPhone] = useInView({
          rootMargin: "-40% 0%",
     });

     const stylePhoneBase = useSpring({
          to: {
               y: inViewPhone ? -50 : 0,
          },
          config: { friction: 50 },
     });

     const stylePhoneShadow = useSpring({
          to: {
               transform: inViewPhone ? "scale(1)" : "scale(0.95)",
               y: inViewPhone ? 10 : 0,
          },
          config: { friction: 50 },
     });

     const styleElectricity = useSpring({
          from: {
               x: 66,
          },
          to: {
               y: inViewPhone ? 98 : 115,
          },
          config: { friction: 50 },
     });

     const styleCellPhone = useSpring({
          from: {
               x: 99,
          },
          to: {
               y: inViewPhone ? 68 : 96,
          },
          config: { friction: 50 },
     });

     const styleInternet = useSpring({
          from: {
               x: 132,
          },
          to: {
               y: inViewPhone ? 38 : 76,
          },
          config: { friction: 50 },
     });

     const styleInsurance = useSpring({
          from: {
               x: 165,
          },
          to: {
               y: inViewPhone ? 38 : 57,
          },
          config: { friction: 50 },
     });

     return (
          <animated.div
               ref={refPhone}
               className="flex items-center justify-center -translate-x-[12.5rem] -translate-y-20 h-[20rem] relative"
          >
               <div>
                    <animated.div style={stylePhoneBase}>
                         <animated.div
                              style={styleElectricity}
                              className="absolute z-50 w-[8.3rem]"
                         >
                              <img
                                   loading="lazy"
                                   src="./img/kiwi-app-phone-electricity.avif"
                                   srcSet="./img/kiwi-app-phone-electricity.avif 1x, ./img/kiwi-app-phone-electricity-retina.avif 2x"
                                   alt=""
                              />
                         </animated.div>
                         <animated.div
                              style={styleCellPhone}
                              className="absolute z-40 w-[8.3rem]"
                         >
                              <img
                                   loading="lazy"
                                   src="./img/kiwi-app-phone-cell-phone.avif"
                                   srcSet="./img/kiwi-app-phone-cell-phone.avif 1x, ./img/kiwi-app-phone-cell-phone-retina.avif 2x"
                                   alt=""
                              />
                         </animated.div>
                         <animated.div
                              style={styleInternet}
                              className="absolute z-30 w-[8.3rem]"
                         >
                              <img
                                   loading="lazy"
                                   src="./img/kiwi-app-phone-internet.avif"
                                   srcSet="./img/kiwi-app-phone-internet.avif 1x, ./img/kiwi-app-phone-internet-retina.avif 2x"
                                   alt=""
                              />
                         </animated.div>
                         <animated.div
                              style={styleInsurance}
                              className="absolute z-20 w-[8.3rem]"
                         >
                              <img
                                   loading="lazy"
                                   src="./img/kiwi-app-phone-health-insurance.avif"
                                   srcSet="./img/kiwi-app-phone-health-insurance.avif 1x, ./img/kiwi-app-phone-health-insurance-retina.avif 2x"
                                   alt=""
                              />
                         </animated.div>
                         <div className="absolute z-10 w-[25rem] ">
                              <img
                                   loading="lazy"
                                   src="./img/kiwi-app-phone-base.avif"
                                   srcSet="./img/kiwi-app-phone-base.avif 1x, ./img/kiwi-app-phone-base-retina.avif 2x"
                                   alt=""
                              />
                         </div>
                    </animated.div>
                    <animated.div
                         style={stylePhoneShadow}
                         className="absolute -z-10 translate-y-2 w-[25rem] "
                    >
                         <img
                              loading="lazy"
                              src="./img/kiwi-app-phone-base-shadow.avif"
                              srcSet="./img/kiwi-app-phone-base-shadow.avif 1x, ./img/kiwi-app-phone-base-shadow-retina.avif 2x"
                              alt=""
                         />
                    </animated.div>
               </div>
          </animated.div>
     );
}
