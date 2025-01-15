"use client";

import ButtonSend from "./ButtonSend";
import ExternalLink from "./ExternalLink";
import { useSendEmail } from "../hooks/useSendEmail";
import Image from "next/image";

export interface ContactData {
     section: string;
     title: string;
     name: string;
     buttons: {
          id: string;
          label: string;
          icon: string;
          link: string;
     }[];
     contactDetails: {
          id: string;
          icon: string;
          label: string;
     }[];
     messageSentTitle: string;
     messageSentMessage: string;
     roleFirstLine: string;
     roleSecondLine: string;
}

interface ContactDataProps {
     data: ContactData;
}

export default function SectionContactRender({ data }: ContactDataProps) {
     const { form, isFormSent, isPending, sendEmail } = useSendEmail();

     return (
          <section
               id="Contact"
               className="flex w-full min-h-screen items-center justify-center pt-28 bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] [background-position:0%_25%,100%_33%,80%_100%] bg-no-repeat"
          >
               <div className="flex flex-col items-center justify-center lg:flex-row w-10/12 md:w-6/12 lg:w-8/12 gap-28">
                    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full gap-40">
                         <div
                              className={`${isFormSent ? "hidden" : ""}${
                                   isPending ? "opacity-50" : ""
                              }`}
                         >
                              <div className="tabtitle">{data.section}</div>
                              <h2>{data.title}</h2>

                              <form
                                   ref={form}
                                   onSubmit={sendEmail}
                                   className="flex flex-col mt-10 gap-5"
                              >
                                   <div className="flex gap-10">
                                        <div className="w-full flex flex-col">
                                             <input
                                                  id="first-name"
                                                  name="first-name"
                                                  className="w-full peer focus:border-henriquepcmpink"
                                                  type="text"
                                                  disabled={isPending}
                                                  required
                                             />
                                             <label
                                                  htmlFor="first-name"
                                                  className="peer-focus:text-henriquepcmpink -translate-y-[3.6rem]"
                                             >
                                                  First Name
                                             </label>
                                        </div>
                                        <div className="w-full flex flex-col">
                                             <input
                                                  id="second-name"
                                                  name="second-name"
                                                  className="w-full peer focus:border-henriquepcmpink"
                                                  type="text"
                                                  disabled={isPending}
                                                  required
                                             />
                                             <label
                                                  htmlFor="second-name"
                                                  className="peer-focus:text-henriquepcmpink -translate-y-[3.6rem]"
                                             >
                                                  Second Name
                                             </label>
                                        </div>
                                   </div>
                                   <div className="w-full flex flex-col">
                                        <input
                                             id="email"
                                             name="email"
                                             className="w-full peer focus:border-henriquepcmpink"
                                             type="email"
                                             pattern="[^@\s]+@[^@\s]+\.[^@\s]+$"
                                             title="e.g., user@example.com"
                                             disabled={isPending}
                                             required
                                        />
                                        <label
                                             htmlFor="email"
                                             className="peer-focus:text-henriquepcmpink -translate-y-[3.6rem]"
                                        >
                                             Email
                                        </label>
                                   </div>
                                   <div className="flex flex-col">
                                        <textarea
                                             id="message"
                                             name="message"
                                             className="peer focus:border-henriquepcmpink"
                                             disabled={isPending}
                                             required
                                        ></textarea>
                                        <label
                                             htmlFor="message"
                                             className="peer-focus:text-henriquepcmpink -translate-y-[11rem]"
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
                              } flex flex-col items-center justify-center gap-5 w-full lg:w-4/6 2xl:w-3/6 transition-opacity duration-300 ease-in-out`}
                         >
                              <Image
                                   src="/img/illustration-message-sent-retina.avif"
                                   width={597}
                                   height={180}
                                   className="w-10/12"
                                   loading="lazy"
                                   alt="Illustration of a desktop window confirming the message was successfully sent."
                              />
                              <h2>{data.messageSentTitle}</h2>
                              <p className="text-center">
                                   {data.messageSentMessage}
                              </p>
                         </div>
                         <div className="flex flex-col items-center lg:items-end lg:w-3/6">
                              <div className="flex flex-col items-center gap-3">
                                   <Image
                                        src="/img/henrique-pochmann-front-end-developer-retina.avif"
                                        width={121}
                                        height={121}
                                        className="w-24 rounded-full border-[0.35rem]"
                                        loading="lazy"
                                        alt="Avatar showing the face of the front-end developer Henrique Pochmann"
                                   />

                                   <div className="flex flex-col items-center justify-center mb-5">
                                        <span className="text-white text-sm">
                                             {data.name}
                                        </span>
                                        <div className="flex flex-col items-center justify-center">
                                             <span className="leading-8">
                                                  {data.roleFirstLine}
                                             </span>
                                             <span className="leading-3">
                                                  {data.roleSecondLine}
                                             </span>
                                        </div>
                                   </div>
                                   {data.buttons.map((button) => {
                                        return (
                                             <ExternalLink
                                                  key={button.id}
                                                  label={button.label}
                                                  icon={button.icon}
                                                  link={button.link}
                                             />
                                        );
                                   })}

                                   {data.contactDetails.map((detail) => {
                                        return (
                                             <div
                                                  key={detail.id}
                                                  className="flex items-center justify-center w-full h-12 border-b border-henriquepcmbasepurple gap-2"
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
