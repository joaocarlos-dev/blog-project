"use server";

import { mkdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";

type uploadImageActionResult = {
  url: string;
  error: string;
};

const uploadMaxSize =
  Number(process.env.NEXT_PUBLIC_IMAGE_UPLOAD_MAX_SIZE) || 921600;

const uploadDir = process.env.IMAGE_UPLOAD_DIRECTORY || "uploads";
const imageServerUrl = process.env.IMAGE_SERVER_URL || "uploads";

export async function uploadImageAction(
  formData: FormData
): Promise<uploadImageActionResult> {
  const makeResult = ({ url = "", error = "" }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: "Dados inválidos" });
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    return makeResult({ error: "Arquivo inválido" });
  }

  if (file.size > uploadMaxSize) {
    return makeResult({ error: "Arquivo muito grande" });
  }

  if (!file.type.startsWith("image/")) {
    return makeResult({ error: "Imagem inválida" });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadsFullPath = resolve(process.cwd(), "public", uploadDir);
  await mkdir(uploadsFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = resolve(uploadsFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const url = `${imageServerUrl}/${uniqueImageName}`;

  return makeResult({ url });
}
