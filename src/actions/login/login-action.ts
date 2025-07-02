"use server";

import { createLoginSession, verifyPassword } from "@/lib/login/manage-login";
import { AsyncDelay } from "@/utils/async-delay";
import { redirect } from "next/navigation";

type loginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: loginActionState, formdata: FormData) {
  await AsyncDelay(2000); // Manter para atrasar brute force

  if (!(formdata instanceof FormData)) {
    return {
      username: "",
      error: "Dados inválidos",
    };
  }

  const username = formdata.get("username")?.toString().trim() || "";
  const password = formdata.get("password")?.toString().trim() || "";

  if (!username || !password) {
    return {
      username,
      error: "Digite o usuário e a senha",
    };
  }
  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = await verifyPassword(
    password,
    process.env.LOGIN_PASS || ""
  );

  if (!(isUsernameValid && isPasswordValid)) {
    return {
      username,
      error: "Usuário ou senha inválidos",
    };
  }

  await createLoginSession(username);
  redirect("/admin/post");
}
