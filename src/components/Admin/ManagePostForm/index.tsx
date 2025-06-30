"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "../InputCheckbox";
import { InputText } from "../InputText";
import { MarkdownEditor } from "@/app/admin/MarkdownEditor";
import { useState } from "react";
import { ImageUploader } from "../imageUploader";

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState("");

  return (
    <form action="">
      <div className="flex flex-col gap-6">
        <ImageUploader />
        <InputText labelText="Nome" placeholder="Digite seu nome" />
        <InputText labelText="Sobrenome" placeholder="Digite seu sobrenome" />
        <InputCheckbox />
        <MarkdownEditor
          labelText="Content"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
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
