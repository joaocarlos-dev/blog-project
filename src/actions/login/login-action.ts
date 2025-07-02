"use server";

import { AsyncDelay } from "@/utils/async-delay";

type loginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: loginActionState, formdata: FormData) {
  await AsyncDelay(2000); // Manter para atrasar brute force

  return {
    username: "",
    error: "",
  };
}
