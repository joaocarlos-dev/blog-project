import { Container } from "@/components/container";
import { PostsList } from "@/components/postsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1>Aqui é o header</h1>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p>Aqui é o footer</p>
      </footer>
    </Container>
  );
}
