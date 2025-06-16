import clsx from "clsx";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
          "text-4xl font-extrabold py-8",
          "sm:text-5xl py-10",
          "md:text-6xl py-11",
          "lg:text-7xl py-12"
        )}
      >
        <Link href="/">The blog</Link>
      </h1>
    </header>
  );
}
