"use server";

import { AsyncDelay } from "@/utils/async-delay";

export async function deletePostAction(id: string) {
  await AsyncDelay(2000, true);
  console.log("" + id);

  return id;
}
