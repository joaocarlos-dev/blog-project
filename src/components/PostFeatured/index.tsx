import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = "qualquer";
  const postLink = `/post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Alt da imagem",
          priority: true,
        }}
      />
      <PostSummary
        postHeading={"h1"}
        postLink={"/images/bryen_8.png"}
        createdAt={"2025-04-08T00:24:38.616Z"}
        title={"Rotina matinal de pessoas altamente eficazes"}
        excerpt={
          "O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO."
        }
      />
    </section>
  );
}
