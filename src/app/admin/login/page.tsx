import { LoginForm } from "@/components/Admin/LoginForm";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Login",
};

export default async function AdminLoginPage() {
  const allowLogin = true;

  if (!allowLogin) {
    return (
      <ErrorMessage
        contentTitle={"403"}
        content={"Libere o sistema de login usando ALLOW_LOGIN"}
      />
    );
  }
  return <LoginForm />;
}
