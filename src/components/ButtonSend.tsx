import { Spinner } from "./icons/Spinner";

type ButtonSendProps = {
     isPending: boolean;
};

export default function ButtonSend({ isPending }: ButtonSendProps) {
     return (
          <button
               aria-label="Send the form"
               className="flex uppercase items-center justify-center text-white border border-henriquepcmbasepurple hover:border-henriquepcmpink bg-henriquepcmbasepurple hover:bg-henriquepcmdarkpurple text-[0.6rem] tracking-[0.15rem] w-full h-full rounded-md transform duration-300 hover:shadow-[-15px_20px_20px_rgba(0,0,0,0.4)] hover:scale-105"
          >
               {isPending ? (
                    <Spinner className="animate-spin size-6" />
               ) : (
                    "Send"
               )}
          </button>
     );
}
