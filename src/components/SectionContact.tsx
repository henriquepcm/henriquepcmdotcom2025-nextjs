import ButtonSend from "./ButtonSend";
import ExternalLink from "./ExternalLink";
import { useSendEmail } from "../hooks/useSendEmail";
import { gql, useQuery } from "@apollo/client";
import { onErrorProps } from "./Error/ErrorType";

interface ContactData {
     contact: {
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
     };
}

const GET_CONTACT_DATA = gql`
     query Contact {
          contact {
               section
               title
               name
               buttons {
                    id
                    label
                    icon
                    link
               }
               contactDetails {
                    id
                    icon
                    label
               }
               messageSentTitle
               messageSentMessage
               roleFirstLine
               roleSecondLine
          }
     }
`;

export default function SectionContact({ onError }: onErrorProps) {
     const { loading, error, data } = useQuery<ContactData>(GET_CONTACT_DATA);
     const { form, isFormSent, isPending, sendEmail } = useSendEmail();

     if (error) {
          onError(error);
          console.error(error.message);
          return;
     }

     if (loading) {
          return;
     }

     return (
          <section
               id="Contact"
               className="flex w-full min-h-screen items-center justify-center pt-44 bg-[url(/img/bg-light-radial.avif),url(/img/bg-light-1.avif),url(/img/bg-light-2.avif)] [background-position:0%_25%,100%_33%,80%_100%] bg-no-repeat"
          >
               <div className="flex flex-col items-center justify-center lg:flex-row w-10/12 md:w-6/12 lg:w-8/12 gap-28">
                    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full gap-40">
                         <div
                              className={`${isFormSent ? "hidden" : ""}${
                                   isPending ? "opacity-50" : ""
                              }`}
                         >
                              <div className="tabtitle">
                                   {data?.contact.section}
                              </div>
                              <h2>{data?.contact.title}</h2>

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
                              <img
                                   src="./img/illustration-message-sent.avif"
                                   srcSet="./img/illustration-message-sent.avif 1x, ./img/illustration-message-sent-retina.avif 2x"
                                   className="w-10/12"
                                   loading="lazy"
                                   alt="Illustration of a desktop window confirming the message was successfully sent."
                              />
                              <h2>{data?.contact.messageSentTitle}</h2>
                              <p className="text-center">
                                   {data?.contact.messageSentMessage}
                              </p>
                         </div>
                         <div className="flex flex-col items-center lg:items-end lg:w-3/6">
                              <div className="flex flex-col items-center gap-3">
                                   <img
                                        src="./img/henrique-pochmann-front-end-developer.avif"
                                        srcSet="./img/henrique-pochmann-front-end-developer.avif 1x, ./img/henrique-pochmann-front-end-developer-retina.avif 2x"
                                        className="w-24 rounded-full border-[0.35rem]"
                                        loading="lazy"
                                        alt="Avatar showing the face of the front-end developer Henrique Pochmann"
                                   />

                                   <div className="flex flex-col items-center justify-center mb-5">
                                        <span className="text-white text-sm">
                                             {data?.contact.name}
                                        </span>
                                        <div className="flex flex-col items-center justify-center">
                                             <span className="leading-8">
                                                  {data?.contact.roleFirstLine}
                                             </span>
                                             <span className="leading-3">
                                                  {data?.contact.roleSecondLine}
                                             </span>
                                        </div>
                                   </div>
                                   {data?.contact.buttons.map((button) => {
                                        return (
                                             <ExternalLink
                                                  key={button.id}
                                                  label={button.label}
                                                  icon={button.icon}
                                                  link={button.link}
                                             />
                                        );
                                   })}

                                   {data?.contact.contactDetails.map(
                                        (detail) => {
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
                                        }
                                   )}
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
