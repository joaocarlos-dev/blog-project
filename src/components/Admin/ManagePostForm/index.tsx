"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "../InputCheckbox";
import { InputText } from "../InputText";

export function ManagePostForm() {
  return (
    <form action="">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite seu nome" />
        <InputText labelText="Sobrenome" placeholder="Digite seu sobrenome" />
        <InputCheckbox />
        <div className="mt-4">
          <Button type="submit" variant={"default"}>
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
