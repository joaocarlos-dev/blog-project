"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "../InputCheckbox";
import { InputText } from "../InputText";
import { MarkdownEditor } from "@/app/admin/MarkdownEditor";
import { useState } from "react";
import { ImageUploader } from "../imageUploader";
import { PublicPost } from "@/dto/post/dto";

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const [contentValue, setContentValue] = useState(publicPost?.content || "");

  return (
    <form action="">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={publicPost?.id || ""}
          readOnly
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerado automaticamente"
          type="text"
          defaultValue={publicPost?.slug || ""}
          readOnly
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={publicPost?.author || ""}
        />

        <InputText
          labelText="Título"
          name="title"
          placeholder="Digite o título"
          type="text"
          defaultValue={publicPost?.title || ""}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={publicPost?.excerpt || ""}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={false}
        />

        <ImageUploader />

        <InputText
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          placeholder="Digite a URL da imagem"
          type="text"
          defaultValue={publicPost?.coverImageUrl || ""}
        />

        <InputCheckbox
          labelText="Publicar?"
          name="published"
          type="checkbox"
          defaultChecked={publicPost?.published || false}
        />

        <div className="mt-4">
          <Button type="submit" variant={"default"}>
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
