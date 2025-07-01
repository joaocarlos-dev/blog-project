"use server";

import {
  makePartialPublicPost,
  makePublicPostFromDb,
  PublicPost,
} from "@/dto/post/dto";
import { PostUpdateSchema } from "@/lib/post/validations";
import { postRepository } from "@/repositories/post";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { makeRandomString } from "@/utils/make-random-string";
import { revalidateTag } from "next/cache";

type updatePostActionState = {
  formState: PublicPost;
  errors: string[];
  success?: string;
};

export async function updatePostAction(
  prevState: updatePostActionState,
  formdata: FormData
): Promise<updatePostActionState> {
  if (!(formdata instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ["Dados inválidos"],
    };
  }
  const id = formdata.get("id")?.toString() || "";

  if (!id || typeof id !== "string") {
    return {
      formState: prevState.formState,
      errors: ["Id inválido"],
    };
  }

  const formDataToObject = Object.fromEntries(formdata.entries());
  const zodParsedObj = PostUpdateSchema.safeParse(formDataToObject);

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error.format());
    return {
      errors,
      formState: makePartialPublicPost(formDataToObject),
    };
  }

  const validPostData = zodParsedObj.data;
  const newPost = {
    ...validPostData,
  };

  let post;
  try {
    post = await postRepository.update(id, newPost);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: makePartialPublicPost(formDataToObject),
        errors: [e.message],
      };
    }
    return {
      formState: makePartialPublicPost(formDataToObject),
      errors: ["Erro desconhecido"],
    };
  }

  revalidateTag("posts");
  revalidateTag(`post-${post.slug}`);

  return {
    formState: makePublicPostFromDb(post),
    errors: [],
    success: makeRandomString(),
  };
}
