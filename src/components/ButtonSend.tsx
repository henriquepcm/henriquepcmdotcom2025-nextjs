import { Spinner } from "./icons/Spinner";

type ButtonSendProps = {
  isPending: boolean;
};

export default function ButtonSend({ isPending }: ButtonSendProps) {
  return (
    <button
      aria-label="Send the form"
      className="brand-btn flex h-full w-full items-center justify-center"
    >
      {isPending ? <Spinner className="size-6 animate-spin" /> : "Send"}
    </button>
  );
}
