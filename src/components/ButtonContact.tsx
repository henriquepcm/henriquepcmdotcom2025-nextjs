import { Button } from "@/types/headerTypes";
import { useBeyondViewport } from "../hooks/useBeyondViewport";

export default function ButtonContact({ button }: { button: Button }) {
  const { isBeyondViewport } = useBeyondViewport();

  return (
    <div
      aria-label="Go to contact form"
      className={`h-10 w-28 transform rounded-md border border-henriquepcmdarkpurple bg-henriquepcmbasepurple text-[0.6rem] uppercase tracking-[0.15rem] text-white duration-300 hover:scale-105 hover:bg-henriquepcmdarkpurple hover:shadow-[-15px_20px_20px_rgba(0,0,0,0.4)] ${
        isBeyondViewport &&
        "border-henriquepcmbasepurple hover:border-henriquepcmpink"
      }`}
    >
      <a
        className="flex h-full w-full items-center justify-center"
        href={button.link}
      >
        {button.label}
      </a>
    </div>
  );
}
