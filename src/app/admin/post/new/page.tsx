import { Button } from "@/components/Button";
import { BugIcon } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div className="py-16 flex gap-4 flax-wrap items-center">
      <Button variant={"default"} size="sm">
        <BugIcon />
        Confirma{" "}
      </Button>
      <Button variant={"ghost"} size="md">
        <BugIcon />
        Confirma
      </Button>
      <Button variant={"danger"} size="lg">
        <BugIcon />
        Confirma
      </Button>
    </div>
  );
}
