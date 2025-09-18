import { Spinner } from "./icons/Spinner";

type ButtonSendProps = {
  isPending: boolean;
};

export default function ButtonSend({ isPending }: ButtonSendProps) {
  return (
    <button
      aria-label="Send the form"
      className="flex h-full w-full transform items-center justify-center rounded-md border border-henriquepcmbasepurple bg-henriquepcmbasepurple text-[0.6rem] uppercase tracking-[0.15rem] text-white duration-300 hover:scale-105 hover:border-henriquepcmpink hover:bg-henriquepcmdarkpurple hover:shadow-[-15px_20px_20px_rgba(0,0,0,0.4)]"
    >
      {isPending ? <Spinner className="size-6 animate-spin" /> : "Send"}
    </button>
  );
}
