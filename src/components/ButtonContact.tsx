import { Button } from "@/types/headerTypes";
import { useBeyondViewport } from "../hooks/useBeyondViewport";

export default function ButtonContact({ button }: { button: Button }) {
     const { isBeyondViewport } = useBeyondViewport();

     return (
          <div
               aria-label="Go to contact form"
               className={`uppercase text-white text-[0.6rem] tracking-[0.15rem]  w-28 h-10 rounded-md transform duration-300 border border-henriquepcmdarkpurple bg-henriquepcmbasepurple hover:bg-henriquepcmdarkpurple hover:shadow-[-15px_20px_20px_rgba(0,0,0,0.4)] hover:scale-105 ${
                    isBeyondViewport &&
                    "border-henriquepcmbasepurple hover:border-henriquepcmpink"
               }`}
          >
               <a
                    className="flex items-center justify-center w-full h-full"
                    href={button.link}
               >
                    {button.label}
               </a>
          </div>
     );
}
