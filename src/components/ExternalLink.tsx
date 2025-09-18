import { useSpring, useInView, animated } from "@react-spring/web";

interface ExternalLinkProps {
  label: string;
  icon: string;
  link: string;
}

export default function ExternalLink({ label, icon, link }: ExternalLinkProps) {
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
    <>
      {/* @ts-expect-error bug with React Spring + TypeScript + Next.js 15 https://github.com/pmndrs/react-spring/issues/2332 */}
      <animated.div
        ref={refLink}
        style={styleExternalLink}
        className="group flex h-12 w-full transform items-center justify-center gap-2 rounded-md border border-henriquepcmbasepurple p-2 duration-300 hover:border-henriquepcmpink"
      >
        <div
          dangerouslySetInnerHTML={{ __html: icon }}
          className="size-4 text-henriquepcmpink duration-300 group-hover:translate-x-1"
        ></div>
        <a
          target="_blank"
          rel="noreferrer"
          className="transform text-white duration-300 group-hover:translate-x-2"
          href={`${link}`}
        >
          {label}
        </a>
      </animated.div>
    </>
  );
}
