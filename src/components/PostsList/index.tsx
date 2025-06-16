import { PostCoverImage } from "../PostCoverImage";

import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

export async function PostsList() {
  const posts = await findAllPublicPosts();
  return (
    <div className="grid grid-cols-1 mb-16 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div key={post.id} className="flex flex-col group gap-4">
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

            <PostSummary
              postHeading="h2"
              postLink={postLink}
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
