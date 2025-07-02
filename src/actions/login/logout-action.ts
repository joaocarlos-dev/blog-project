"use server";

import { AsyncDelay } from "@/utils/async-delay";

export async function logoutAction() {
  await AsyncDelay(2000); // Manter para atrasar brute force
}
