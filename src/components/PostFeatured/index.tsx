import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

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
      <div className="flex flex-col sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2025-04-20"
        >
          20/04/2025 10:00
        </time>

        <PostHeading as="h2" url={postLink}>
          Titulo post principal
        </PostHeading>

        <p>
          Aqui vai o textao do post principal. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut consequat mi non turpis viverra, sed
          dignissim dolor molestie. Donec interdum sem vel libero laoreet
          aliquet. Mauris tincidunt, risus et vehicula lacinia, mauris ex
          ultricies urna, at malesuada erat ligula in elit. Aenean rhoncus dui
          vel turpis semper, eu varius diam consectetur. Curabitur mollis, leo
          vitae vestibulum tempor, ex justo laoreet leo, iaculis elementum
          mauris sapien vitae mi.{" "}
        </p>
      </div>
    </section>
  );
}
