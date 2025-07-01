"use server";

import { postRepository } from "@/repositories/post";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  let post;

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { error: e.message };
    }
    return {
      error: "Erro desconhecido",
    };
  }

  // TODO: Revalidate tag/path
  revalidateTag("posts");
  revalidateTag(`posts-${post.slug}`);

  return {
    error: "",
  };
}
