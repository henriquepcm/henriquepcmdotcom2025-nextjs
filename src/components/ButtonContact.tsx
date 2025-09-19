import { Button } from "@/types/headerTypes";

export default function ButtonContact({ button }: { button: Button }) {
  return (
    <div
      aria-label="Go to contact form"
      className="brand-btn h-10 w-28 text-[0.6rem]"
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
