import ArrowPath from "@/components/icons/ArrowPath";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ChevronIcon from "@/components/icons/ChevronIcon";
import DocumentIcon from "@/components/icons/DocumentIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import UserCircleIcon from "@/components/icons/UserCircleIcon";
import Image from "next/image";
import Link from "next/link";

export default async function SingleBlogPost() {
  return (
    <div className="mt-36 flex w-full items-center justify-center">
      <article className="flex w-10/12 flex-col xl:w-6/12">
        <header>
          <nav aria-label="Breadcrum">
            <ol className="flex items-center gap-4 text-[0.6rem]">
              <li aria-hidden="true">
                <div className="size-3 text-brandtextprimary opacity-30">
                  <HomeIcon />
                </div>
              </li>
              <li>
                <Link
                  className="transform border-transparent pb-1 text-brandtextprimary duration-300 hover:border-b-2 hover:border-brandprimary"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <div className="size-3 -rotate-90 text-brandtextprimary opacity-30">
                  <ChevronIcon />
                </div>
              </li>
              <li>
                <Link
                  className="transform border-transparent pb-1 text-brandtextprimary duration-300 hover:border-b-2 hover:border-brandprimary"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">
                <div className="size-3 -rotate-90 text-brandtextprimary opacity-30">
                  <ChevronIcon />
                </div>
              </li>
              <li>
                <Link
                  className="transform border-transparent pb-1 text-brandtextprimary duration-300 hover:border-b-2 hover:border-brandprimary"
                  href="/blog"
                >
                  Frontend
                </Link>
              </li>
              <li aria-hidden="true">
                <div className="size-3 -rotate-90 text-brandtextprimary opacity-30">
                  <ChevronIcon />
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="mt-8 text-3xl font-bold normal-case leading-normal tracking-normal">
            Title ~50–60 characters: How I Built a Theme Switcher with Next.js
            and TailwindCSS
          </h1>
          <p className="mt-4 text-xl leading-loose tracking-normal">
            Subtext, ~120–160 characters: A walkthrough of how I designed a
            smooth dark/light theme experience using Tailwind and Next.js.
          </p>
          <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row">
            <div className="flex gap-2 text-start">
              <div className="mt-1 flex size-[0.875rem] text-brandtextprimary opacity-30">
                <CalendarIcon />
              </div>
              <div className="flex items-center gap-1 md:flex-col md:items-start md:gap-0 2xl:flex-row 2xl:gap-1">
                <div>Published: </div>
                <div className="leading-5 text-brandtextprimary 2xl:leading-6">
                  Jan 23, 2025 10:30 AM
                </div>
              </div>
            </div>
            <div className="flex gap-2 text-start">
              <div className="mt-1 flex size-[0.875rem] text-brandtextprimary opacity-30">
                <ArrowPath />
              </div>
              <div className="flex items-center gap-1 md:flex-col md:items-start md:gap-0 2xl:flex-row 2xl:gap-1">
                <div>Updated: </div>
                <div className="leading-5 text-brandtextprimary 2xl:leading-6">
                  Jan 23, 2025 10:30 AM
                </div>
              </div>
            </div>

            <div className="flex gap-2 text-start">
              <div className="mt-1 flex size-[0.875rem] text-brandtextprimary opacity-30">
                <UserCircleIcon />
              </div>
              <div className="flex items-center gap-1 md:flex-col md:items-start md:gap-0 2xl:flex-row 2xl:gap-1">
                <div>Author: </div>
                <div className="leading-5 text-brandtextprimary 2xl:leading-6">
                  Henrique Pochmann
                </div>
              </div>
            </div>
          </div>
          <figure className="aspect-[600/630] w-full overflow-hidden md:aspect-[1200/630]">
            <Image
              alt="featured image"
              src="/img/placeholder-featured-image-1600x630.png"
              width={1200}
              height={630}
              className="mt-8 h-full w-full object-cover object-right"
            ></Image>
          </figure>
        </header>
        <div className="mt-8 flex w-full justify-between">
          <div className="w-4/6">
            <section className="flex w-full flex-col gap-8 text-base leading-loose tracking-normal">
              <h2 className="text-2xl font-bold normal-case tracking-normal">
                Suspendisse malesuada, ipsum gravida lacinia interdum
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                id hendrerit tortor. Quisque pretium mauris vel massa placerat
                fermentum. Vivamus tellus ante, aliquam ut sodales at, vehicula
                non arcu. In lorem est, blandit non bibendum a, scelerisque
                ullamcorper enim. Integer tempus metus nisl, ut semper purus
                sagittis in. Suspendisse sit amet suscipit sapien. Suspendisse
                malesuada, ipsum gravida lacinia interdum, ex est consectetur
                ipsum, id pulvinar urna est venenatis sem.
              </p>
              <p>
                Etiam malesuada odio vitae condimentum feugiat. Vivamus feugiat
                ipsum eu rutrum hendrerit. Integer ut augue eget lorem efficitur
                pharetra. Nullam feugiat, metus et tincidunt cursus, odio quam
                sodales urna, quis placerat metus magna id metus. In vel dictum
                metus. Etiam a eros velit. Maecenas volutpat mi rhoncus lorem
                maximus aliquam. Aliquam vitae ligula at risus posuere elementum
                at vel libero. Quisque in iaculis velit. Quisque mattis quam
                quis eros sodales, non maximus turpis gravida. Proin sagittis
                rutrum fermentum.
              </p>
              <p>
                Sed dapibus justo et finibus varius. Integer quis dolor ut
                lectus fringilla venenatis. Quisque eget purus sem. Nulla
                consequat ante non hendrerit vehicula. Sed eu tortor magna.
                Aliquam justo mauris, consequat nec ultricies in, lobortis non
                lorem. Nullam nunc velit, lacinia vitae velit eget, feugiat
                sodales lacus. Mauris interdum diam sit amet pellentesque
                interdum. Duis pellentesque libero neque, non auctor lacus
                ultricies sit amet. Maecenas in molestie sapien. Donec ut
                pellentesque magna, at pulvinar ante. Suspendisse potenti.
                Curabitur ac suscipit nulla, non vehicula libero. Donec id
                fermentum justo. Donec et rutrum nunc, vel gravida sem.
                Vestibulum suscipit commodo mattis.
              </p>
              <h3 className="text-xl font-bold normal-case tracking-normal">
                Suspendisse malesuada, ipsum gravida lacinia interdum
              </h3>
              <p>
                Nullam molestie ultrices dolor, quis maximus lorem ornare nec.
                Aliquam sollicitudin rutrum massa, vitae tempus eros sagittis
                id. Nulla dictum et tortor non finibus. Nulla leo ex, luctus sed
                eros quis, faucibus placerat purus. Curabitur eu ante dignissim
                mi porta eleifend. Curabitur viverra eu velit sed gravida. Morbi
                at tellus ipsum. Sed convallis dapibus purus nec pharetra. Sed
                condimentum rhoncus eleifend. Pellentesque vestibulum ante sit
                amet lacus tincidunt laoreet. Cras suscipit eros a arcu pharetra
                porttitor. Sed fringilla mauris et dui condimentum malesuada.
              </p>
              <blockquote className="border-l border-brandtextprimary p-5 text-xl font-medium leading-loose text-brandtextprimary sm:ml-5">
                <p>
                  “Design is not just what it looks like and feels like. Design
                  is how it works.”
                </p>
                <cite>— Steve Jobs</cite>
              </blockquote>
              <p>
                Sed in mi sem. In et magna dapibus, blandit enim et, pulvinar
                magna. Quisque in pellentesque lectus, quis fermentum velit. In
                hac habitasse platea dictumst. Pellentesque dui ex, porta eu
                purus et, tempor feugiat lorem. Suspendisse potenti. Suspendisse
                lorem enim, tincidunt at egestas vitae, sollicitudin sit amet
                odio.
              </p>
              <h3 className="text-xl font-bold normal-case tracking-normal">
                Suspendisse malesuada, ipsum gravida lacinia interdum
              </h3>
              <p>
                Sed in mi sem. In et magna dapibus, blandit enim et, pulvinar
                magna. Quisque in pellentesque lectus, quis fermentum velit. In
                hac habitasse platea dictumst. Pellentesque dui ex, porta eu
                purus et, tempor feugiat lorem. Suspendisse potenti. Suspendisse
                lorem enim, tincidunt at egestas vitae, sollicitudin sit amet
                odio.
              </p>
              <ul className="w-fit list-disc sm:ml-10">
                <li className="border-b-[0.01rem] border-brandtextsecondary p-4">
                  <strong>Whitespace:</strong> gives content room to breathe.
                </li>
                <li className="border-b-[0.01rem] border-brandtextsecondary p-4">
                  <strong>Consistency:</strong> builds trust and predictability.
                </li>
                <li className="border-b-[0.01rem] border-brandtextsecondary p-4">
                  <strong>Contrast:</strong> directs attention effectively.
                </li>
              </ul>
            </section>
            <footer className="mt-24">post footer infor here</footer>
          </div>
          <aside className="hidden lg:flex lg:w-2/6">
            <nav aria-label="Table of contents" className="w-full pl-10">
              <div className="flex items-center gap-2 border-b-[0.1rem] border-brandsurface pb-2">
                <div className="size-4 text-brandtextprimary opacity-30">
                  <DocumentIcon />
                </div>
                <div>Table of Contents</div>
              </div>
              <ul>
                <li>
                  <a href="#introduction">Introduction</a>
                </li>
                <li>
                  <a href="#getting-started">Getting Started</a>
                  <ul>
                    <li>
                      <a href="#installation">Installation</a>
                    </li>
                    <li>
                      <a href="#configuration">Configuration</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#advanced-topics">Advanced Topics</a>
                  <ul>
                    <li>
                      <a href="#performance">Performance</a>
                      <ul>
                        <li>
                          <a href="#installation">Installation</a>
                        </li>
                        <li>
                          <a href="#configuration">Configuration</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#security">Security</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#conclusion">Conclusion</a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </article>
    </div>
  );
}
