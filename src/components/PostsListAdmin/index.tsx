import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";

export default async function AdminPostsListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "py-2",
              !post.published && "bg-slate-400",
              "flex gap-2 items-center justify-between"
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}></Link>

            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                (Não Publicado)
              </span>
            )}

            <button
              className={clsx(
                "text-red-500 hover:cursor-pointer transition",
                "[&_svg]:w-4 [&_svg]:h-4",
                "hover:scale-120 hover:text-red-700"
              )}
              aria-label={`Apagar post: ${post.title}`}
              title={`Apagar post: ${post.title}`}
            >
              <Trash2Icon />
            </button>
          </div>
        );
      })}
    </div>
  );
}
