"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { useEffect } from "react";

type ErrorProps = {
  error: Error;
};

export default function RootErrorPage({ error }: ErrorProps) {
  useEffect(() => {}, [error]);

  return (
    <ErrorMessage
      pageTitle={"Internal Server Error"}
      contentTitle={"501"}
      content={
        "Ocorreu um erro no qual a aplicação não conseguiu se recuperar. Tente novamente mais tarde."
      }
    />
  );
}
