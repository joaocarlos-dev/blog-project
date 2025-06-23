import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../Admin/DeletePostButton";

export default async function AdminPostsListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "py-2",
              !post.published && "bg-slate-300",
              "flex gap-2 items-center justify-between"
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                (Não Publicado)
              </span>
            )}

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}

      <div
        className={clsx(
          "fixed z-50 inset-0 bg-black/50 backdrop-blur-xs",
          "flex items-center justify-center"
        )}
      >
        <div
          className={clsx(
            "bg-slate-100 p-6 rounded-lg max-w-2xl mx-6",
            "flex flex-col gap-6",
            "shadow-lg shadow-black/30 text-center"
          )}
        >
          <h3 className="text-xl font-bold">Título do DIALOG</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultricies facilisis dapibus. Ut interdum tincidunt maximus.
            Pellentesque in vulputate neque, in lacinia mi. Fusce quis elit quis
            lorem faucibus molestie nec et massa. Cras varius, quam quis
            pellentesque euismod, turpis mauris posuere tortor, eu ullamcorper
            enim sapien nec tortor.
          </p>
          <div className="flex items-center justify-around">
            <button
              className={clsx(
                "bg-slate-300 text-slate-950 hover:bg-slate-400",
                "flex items-center",
                "py-2 px-4 rounded-lg cursor-pointer"
              )}
              autoFocus
            >
              Cancelar
            </button>
            <button
              className={clsx(
                "bg-blue-500 text-blue-50 hover:bg-blue-600",
                "flex items-center",
                "py-2 px-4 rounded-lg cursor-pointer"
              )}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
