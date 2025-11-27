import ExternalLink from "@/components/ui/ExternalLink";
import Image from "next/image";
import { UserUi } from "./SectionContact.types";

export default function SectionContactDetails({ user }: { user: UserUi }) {
    const { name, role } = user;

    return (
        <>
            <Image
                src="/img/front-end-developer-ui-ux-designer-brazil-latam-henrique-pochmann.avif"
                width={121}
                height={121}
                className="min-w-24 rounded-full border-[0.35rem]"
                loading="lazy"
                alt="Avatar showing the face of the front-end developer and UI/UX designer in Brazil, Latam, Henrique Pochmann"
            />
            <div className="flex flex-col items-center justify-center">
                <p className="text-nowrap">{name}</p>
                <p className="text-nowrap">{role}</p>
            </div>
            <ul
                aria-label="Social links"
                className="flex w-full flex-col gap-5"
            >
                {user.socialSites.map((site) => {
                    return (
                        <li key={site.id}>
                            <ExternalLink site={site} />
                        </li>
                    );
                })}
            </ul>
            <ul aria-label="Contact details" className="flex flex-col">
                {user.contactItems.map((item) => {
                    const { id, icon, value } = item;
                    return (
                        <li
                            key={id}
                            className="flex h-12 w-full items-center justify-center gap-2 border-b border-brandborder"
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: icon,
                                }}
                                className="size-4"
                            ></div>
                            {value}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
