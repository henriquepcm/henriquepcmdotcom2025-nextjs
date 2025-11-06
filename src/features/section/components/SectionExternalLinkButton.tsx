"use client";

import { useSpring, useInView, animated } from "@react-spring/web";

interface ExternalLinkProps {
    label: string;
    link: string;
    className: string;
    icon: string;
}

export default function SectionExternalLinkButton({
    label,
    link,
    className,
    icon,
}: ExternalLinkProps) {
    const [refLink, inViewLink] = useInView({
        rootMargin: "-10% 0%",
    });

    const styleExternalLink = useSpring({
        to: {
            opacity: inViewLink ? 1 : 0,
            x: inViewLink ? 0 : -10,
        },
        delay: 500,
        config: { duration: 50 },
    });

    return (
        <div className={className}>
            <a
                target="_blank"
                rel="noreferrer"
                className="group w-full transform text-brandtextprimary duration-300"
                href={`${link}`}
            >
                {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
                <animated.div
                    ref={refLink}
                    style={styleExternalLink}
                    className="flex h-12 w-full transform items-center justify-center gap-2 rounded-md border border-brandprimary p-2 duration-300 hover:bg-brandaccent"
                >
                    <div
                        dangerouslySetInnerHTML={{ __html: icon }}
                        className="size-4 text-brandtextsecondary duration-300 group-hover:translate-x-1"
                    ></div>

                    <div className="duration-300 group-hover:translate-x-2">
                        {label}
                    </div>
                </animated.div>
            </a>
        </div>
    );
}
