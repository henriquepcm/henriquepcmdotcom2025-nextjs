import { Spinner } from "@/components/icons/Spinner";

export default function ContactFormSubmitButton({
    isPending,
}: {
    isPending: boolean;
}) {
    return (
        <button
            aria-label="Send the form"
            className="flex h-16 w-full transform items-center justify-center rounded-md bg-brandprimary text-[0.6rem] uppercase tracking-[0.15rem] text-brandsecondary duration-300 hover:shadow-md hover:shadow-brandshadow"
        >
            {isPending ? <Spinner className="size-6 animate-spin" /> : "Send"}
        </button>
    );
}
