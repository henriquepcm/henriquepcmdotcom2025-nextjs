import { Button } from "@/types/headerTypes";
import Link from "next/link";

type ButtonContactProps = {
  button: Button;
  isBlog: boolean;
};

export default function ButtonContact({ button, isBlog }: ButtonContactProps) {
  const url = isBlog ? `/#${button.link}` : `#${button.link}`;

  return (
    <div
      aria-label="Go to contact form"
      className="brand-btn h-10 w-28 text-[0.6rem]"
    >
      <Link
        aria-label="Go to contact form"
        className="flex h-full w-full items-center justify-center text-brandsecondary"
        href={url}
      >
        {button.label}
      </Link>
    </div>
  );
}
