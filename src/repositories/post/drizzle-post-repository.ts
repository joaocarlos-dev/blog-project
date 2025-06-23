import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { AsyncDelay } from "@/utils/async-delay";
import { SIMULATE_WAIT_IN_MS } from "@/lib/constants";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    await AsyncDelay(SIMULATE_WAIT_IN_MS, true);

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await AsyncDelay(SIMULATE_WAIT_IN_MS, true);

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    await AsyncDelay(SIMULATE_WAIT_IN_MS, true);

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error("Post não encontrado para slug");

    return post;
  }

  async findById(id: string): Promise<PostModel> {
    await AsyncDelay(SIMULATE_WAIT_IN_MS, true);

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error("Post não encontrado para id");

    return post;
  }
}

(async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAllPublic();

  posts.forEach((post) => console.log(post.slug, post.published));
})();
