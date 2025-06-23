export async function AsyncDelay(miliseconds: number, verbose = false) {
  if (miliseconds <= 0) return;

  if (verbose) console.log(`Delaying for ${miliseconds / 1000}`);

  await new Promise((resolve) => setTimeout(resolve, miliseconds));
}
