"use server";

import { deleteLoginSession } from "@/lib/login/manage-login";
import { AsyncDelay } from "@/utils/async-delay";
import { redirect } from "next/navigation";

export async function logoutAction() {
  await AsyncDelay(1000); // Manter para atrasar brute force

  await deleteLoginSession();
  redirect("/");
}
