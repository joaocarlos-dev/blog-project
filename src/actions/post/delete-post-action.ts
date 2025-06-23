"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { AsyncDelay } from "@/utils/async-delay";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  // TODO: Checar login do usuário

  await AsyncDelay(2000, true);
  console.log("" + id);

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: "Post não existe",
    };
  }

  // TODO: Mover o método para o repositório
  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

  // TODO: Revalidate tag/path
  revalidateTag("posts");
  revalidateTag(`posts-${post.slug}`);

  return {
    error: "",
  };
}
