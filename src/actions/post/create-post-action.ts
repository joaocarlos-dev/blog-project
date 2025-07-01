"use server";

import { PublicPost } from "@/dto/post/dto";

type createPostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: createPostActionState,
  formdata: FormData
): Promise<createPostActionState> {
  const title = formdata.get("title")?.toString() || "";
  return {
    formState: { ...prevState.formState, title },
    errors: [],
  };
}
