"use client";

import Image from "next/image";
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
        <>
            {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
            <animated.div
                ref={refPhone}
                className="relative flex h-[20rem] -translate-x-[12.5rem] -translate-y-20 items-center justify-center"
            >
                <div>
                    {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
                    <animated.div style={stylePhoneBase}>
                        {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
                        <animated.div
                            style={styleElectricity}
                            className="absolute z-50 w-[8.3rem]"
                        >
                            <Image
                                loading="lazy"
                                src="/img/kiwi-app-phone-electricity-retina.avif"
                                width={185}
                                height={107}
                                alt=""
                            />
                        </animated.div>

                        {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
                        <animated.div
                            style={styleCellPhone}
                            className="absolute z-40 w-[8.3rem]"
                        >
                            <Image
                                loading="lazy"
                                src="/img/kiwi-app-phone-cell-phone-retina.avif"
                                width={185}
                                height={107}
                                alt=""
                            />
                        </animated.div>
                        {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
                        <animated.div
                            style={styleInternet}
                            className="absolute z-30 w-[8.3rem]"
                        >
                            <Image
                                loading="lazy"
                                src="/img/kiwi-app-phone-internet-retina.avif"
                                width={185}
                                height={107}
                                alt=""
                            />
                        </animated.div>
                        {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
                        <animated.div
                            style={styleInsurance}
                            className="absolute z-20 w-[8.3rem]"
                        >
                            <Image
                                loading="lazy"
                                src="/img/kiwi-app-phone-health-insurance-retina.avif"
                                width={185}
                                height={107}
                                alt=""
                            />
                        </animated.div>
                        <div className="absolute z-10 w-[25rem]">
                            <Image
                                loading="lazy"
                                src="/img/kiwi-app-phone-base-retina.avif"
                                width={400}
                                height={235}
                                sizes="(max-width: 768px) 100vw, 400px"
                                alt="Kiwi App on Phone"
                            />
                        </div>
                    </animated.div>
                    {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
                    <animated.div
                        style={stylePhoneShadow}
                        className="absolute -z-10 w-[25rem] translate-y-2"
                    >
                        <Image
                            loading="lazy"
                            src="/img/kiwi-app-phone-base-shadow.avif"
                            width={535}
                            height={326}
                            alt=""
                        />
                    </animated.div>
                </div>
            </animated.div>
        </>
    );
}
