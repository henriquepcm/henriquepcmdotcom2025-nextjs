import HomeAnimation from "./Animations/HomeAnimation";
import { onErrorProps } from "./Error/ErrorType";

export default function SectionHome({ onError }: onErrorProps) {
     return (
          <section id="Home" className="flex flex-col min-h-screen w-full">
               <HomeAnimation onError={onError} />
          </section>
     );
}
