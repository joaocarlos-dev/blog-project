import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { PostsList } from "@/components/postsList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 trasition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Título do post"
            priority
          ></Image>
        </Link>
        <div className="flex flex-col sm:justify-center">
          <time
            className="text-slate-600 block text-sm/tight"
            dateTime="2025-04-20"
          >
            20/04/2024 10:00
          </time>

          <h1 className="text-2xl/tight font-extrabold mb-3 sm:text-4xl">
            <Link href="#"> Lorem ipsum dolor sit amet</Link>
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat mi non turpis viverra, sed dignissim dolor molestie. Donec
            interdum sem vel libero laoreet aliquet. Mauris tincidunt, risus et
            vehicula lacinia, mauris ex ultricies urna, at malesuada erat ligula
            in elit. Aenean rhoncus dui vel turpis semper, eu varius diam
            consectetur. Curabitur mollis, leo vitae vestibulum tempor, ex justo
            laoreet leo, iaculis elementum mauris sapien vitae mi.{" "}
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p>Aqui é o footer</p>
      </footer>
    </Container>
  );
}
