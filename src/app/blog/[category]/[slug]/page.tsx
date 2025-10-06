import ChevronIcon from "@/components/icons/ChevronIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import Image from "next/image";
import Link from "next/link";

export default async function SingleBlogPost() {
  return (
    <div className="mt-36 flex items-center justify-center">
      <article className="flex w-10/12 flex-col">
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
            </ol>
          </nav>

          <h1 className="mt-8 text-3xl font-bold normal-case">
            Implementing a theme switcher with Next.js and TailwindCSS
          </h1>
          <p className="mt-4 text-base font-light leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae risus nunc. Cras viverra ut turpis ut lacinia. Aenean iaculis
            venenatis urna, ut euismod arcu bibendum nec. Quisque vehicula
            pellentesque neque, maximus tristique nisl efficitur ut. Proin a
            mauris vel augue vehicula rutrum. Phasellus non est magna.
          </p>
          <div className="mt-8 flex items-center gap-8 text-[0.6rem]">
            <p>
              Published: Jan 23, 2025 at 10:30 AM • Updated: Feb 10, 2025 at
              4:45 PM
            </p>
            <p>Author: Henrique Pochmann</p>
          </div>
          <figure>
            <Image
              alt="featured image"
              src="/img/placeholder-featured-image-1600x630.png"
              width={1600}
              height={630}
              className="mt-8 w-full"
            ></Image>
          </figure>
        </header>
        <section className="mt-8 flex flex-col gap-8 text-sm leading-loose">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
            hendrerit tortor. Quisque pretium mauris vel massa placerat
            fermentum. Vivamus tellus ante, aliquam ut sodales at, vehicula non
            arcu. In lorem est, blandit non bibendum a, scelerisque ullamcorper
            enim. Integer tempus metus nisl, ut semper purus sagittis in.
            Suspendisse sit amet suscipit sapien. Suspendisse malesuada, ipsum
            gravida lacinia interdum, ex est consectetur ipsum, id pulvinar urna
            est venenatis sem.
          </p>
          <p>
            Etiam malesuada odio vitae condimentum feugiat. Vivamus feugiat
            ipsum eu rutrum hendrerit. Integer ut augue eget lorem efficitur
            pharetra. Nullam feugiat, metus et tincidunt cursus, odio quam
            sodales urna, quis placerat metus magna id metus. In vel dictum
            metus. Etiam a eros velit. Maecenas volutpat mi rhoncus lorem
            maximus aliquam. Aliquam vitae ligula at risus posuere elementum at
            vel libero. Quisque in iaculis velit. Quisque mattis quam quis eros
            sodales, non maximus turpis gravida. Proin sagittis rutrum
            fermentum.
          </p>
          <p>
            Sed dapibus justo et finibus varius. Integer quis dolor ut lectus
            fringilla venenatis. Quisque eget purus sem. Nulla consequat ante
            non hendrerit vehicula. Sed eu tortor magna. Aliquam justo mauris,
            consequat nec ultricies in, lobortis non lorem. Nullam nunc velit,
            lacinia vitae velit eget, feugiat sodales lacus. Mauris interdum
            diam sit amet pellentesque interdum. Duis pellentesque libero neque,
            non auctor lacus ultricies sit amet. Maecenas in molestie sapien.
            Donec ut pellentesque magna, at pulvinar ante. Suspendisse potenti.
            Curabitur ac suscipit nulla, non vehicula libero. Donec id fermentum
            justo. Donec et rutrum nunc, vel gravida sem. Vestibulum suscipit
            commodo mattis.
          </p>
          <p>
            Nullam molestie ultrices dolor, quis maximus lorem ornare nec.
            Aliquam sollicitudin rutrum massa, vitae tempus eros sagittis id.
            Nulla dictum et tortor non finibus. Nulla leo ex, luctus sed eros
            quis, faucibus placerat purus. Curabitur eu ante dignissim mi porta
            eleifend. Curabitur viverra eu velit sed gravida. Morbi at tellus
            ipsum. Sed convallis dapibus purus nec pharetra. Sed condimentum
            rhoncus eleifend. Pellentesque vestibulum ante sit amet lacus
            tincidunt laoreet. Cras suscipit eros a arcu pharetra porttitor. Sed
            fringilla mauris et dui condimentum malesuada.
          </p>
          <p>
            Sed in mi sem. In et magna dapibus, blandit enim et, pulvinar magna.
            Quisque in pellentesque lectus, quis fermentum velit. In hac
            habitasse platea dictumst. Pellentesque dui ex, porta eu purus et,
            tempor feugiat lorem. Suspendisse potenti. Suspendisse lorem enim,
            tincidunt at egestas vitae, sollicitudin sit amet odio.
          </p>
        </section>
        <footer>post footer infor here</footer>
      </article>
    </div>
  );
}
