"use client";

import clsx from "clsx";
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  const navClasses = clsx(
    "bg-slate-900 text-slate-100 rounded-lg mb-8",
    "flex flex-col transition-all ease-in-out duration-400 overflow-hidden",
    isOpen ? "max-h-100" : "max-h-10",
    "sm:max-h-none sm:h-auto sm:overflow-visible sm:flex-row sm:flex-wrap"
  );
  const linkClasses = clsx(
    "px-4",
    "flex items-center justify-start gap-2 cursor-pointer",
    "transition hover:bg-slate-800",
    "h-10",
    "shrink-0"
  );

  const openCloseBtnClasses = clsx(
    linkClasses,
    "text-blue-200 italic",
    "sm:hidden"
  );

  return (
    <nav className={navClasses}>
      <button
        onClick={() => {
          setIsOpen((s) => !s);
        }}
        className={openCloseBtnClasses}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}

        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>
      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon size={16} />
        Home
      </a>

      <Link className={linkClasses} href={"/admin/post"}>
        <FileTextIcon size={16} />
        Posts
      </Link>

      <Link className={linkClasses} href={"/admin/post/new"}>
        <PlusIcon size={16} />
        Posts
      </Link>
      <Link className={linkClasses} href={"/admin/post/new"}>
        <PlusIcon size={16} />
        Posts
      </Link>
      <Link className={linkClasses} href={"/admin/post/new"}>
        <PlusIcon size={16} />
        Posts
      </Link>
      <Link className={linkClasses} href={"/admin/post/new"}>
        <PlusIcon size={16} />
        Posts
      </Link>
    </nav>
  );
}
