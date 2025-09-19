"use client";

import ButtonSend from "./ButtonSend";
import ExternalLink from "./ExternalLink";
import { useSendEmail } from "../hooks/useSendEmail";
import Image from "next/image";
import { Data } from "@/types/contactTypes";

export default function SectionContactRender({ data }: { data: Data }) {
  // ––––– Derived Data –––––––––––––––––––––––––
  const section = data.page.title;
  const mainTitle = data.page.titles.mainTitle;
  const name = data.page.contactItems.name;
  const role = data.page.contactItems.role;

  const socialButtons = data.socialSites.nodes.map((item) => {
    return {
      id: item.id,
      label: item.socialSites.label,
      icon: item.socialSites.icon,
      link: item.socialSites.link,
    };
  });

  const contactDetails = [
    {
      id: `${name}-detail1`,
      label: data.page.contactItems.email,
      icon: data.page.contactItems.emailIcon,
    },
    {
      id: `${name}-detail2`,
      label: data.page.contactItems.location,
      icon: data.page.contactItems.locationIcon,
    },
    {
      id: `${name}-detail3`,
      label: data.page.contactItems.timezone,
      icon: data.page.contactItems.timezoneIcon,
    },
  ];

  // ––––– Form Data –––––––––––––––––––––––––
  const { form, isFormSent, isPending, sendEmail } = useSendEmail();

  return (
    <section
      id="Contact"
      className="flex min-h-screen w-full items-center justify-center pt-28"
    >
      <div className="flex w-10/12 flex-col items-center justify-center gap-28 md:w-6/12 lg:w-8/12 lg:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-40 lg:flex-row">
          <div
            className={`${isFormSent ? "hidden" : ""}${
              isPending ? "opacity-50" : ""
            }`}
          >
            <div className="tabtitle">{section}</div>
            <h2>{mainTitle}</h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-10 flex flex-col gap-5"
            >
              <div className="flex gap-10">
                <div className="flex w-full flex-col">
                  <input
                    id="first-name"
                    name="first-name"
                    className="focus:border-brandprimary border-brandborder peer w-full"
                    type="text"
                    disabled={isPending}
                    required
                  />
                  <label
                    htmlFor="first-name"
                    className="peer-focus:text-brandprimary -translate-y-[3.6rem]"
                  >
                    First Name
                  </label>
                </div>
                <div className="flex w-full flex-col">
                  <input
                    id="second-name"
                    name="second-name"
                    className="focus:border-brandprimary border-brandborder peer w-full"
                    type="text"
                    disabled={isPending}
                    required
                  />
                  <label
                    htmlFor="second-name"
                    className="peer-focus:text-brandprimary -translate-y-[3.6rem]"
                  >
                    Second Name
                  </label>
                </div>
              </div>
              <div className="flex w-full flex-col">
                <input
                  id="email"
                  name="email"
                  className="focus:border-brandprimary border-brandborder peer w-full"
                  type="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+$"
                  title="e.g., user@example.com"
                  disabled={isPending}
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:text-brandprimary -translate-y-[3.6rem]"
                >
                  Email
                </label>
              </div>
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  className="focus:border-brandprimary border-brandborder required peer"
                ></textarea>
                <label
                  htmlFor="message"
                  className="peer-focus:text-brandprimary -translate-y-[11rem]"
                >
                  Message
                </label>
              </div>
              <div className="h-16">
                <ButtonSend isPending={isPending} />
              </div>
            </form>
          </div>
          <div
            aria-hidden={isFormSent}
            className={`${
              isFormSent ? "" : "hidden"
            } flex w-full flex-col items-center justify-center gap-5 transition-opacity duration-300 ease-in-out lg:w-4/6 2xl:w-3/6`}
          >
            <h2>Thanks for reaching out!</h2>
            <p className="text-center">
              Your message is on its way, and I&apos;ll get back to you as soon
              as possible.
            </p>
          </div>
          <div className="flex flex-col items-center lg:w-3/6 lg:items-end">
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/img/front-end-developer-ui-ux-designer-brazil-latam-henrique-pochmann.avif"
                width={121}
                height={121}
                className="w-24 rounded-full border-[0.35rem]"
                loading="lazy"
                alt="Avatar showing the face of the front-end developer and UI/UX designer in Brazil, Latam, Henrique Pochmann"
              />

              <div className="mb-5 flex flex-col items-center justify-center">
                <div className="text-sm text-white">{name}</div>
                <div className="text-center">{role}</div>
              </div>
              {socialButtons.map((button) => {
                return (
                  <ExternalLink
                    key={button.id}
                    label={button.label}
                    icon={button.icon}
                    link={button.link}
                  />
                );
              })}

              {contactDetails.map((detail) => {
                return (
                  <div
                    key={detail.id}
                    className="border-brandborder flex h-12 w-full items-center justify-center gap-2 border-b"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: detail.icon,
                      }}
                      className="size-4"
                    ></div>
                    {detail.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
