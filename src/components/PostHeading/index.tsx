import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-2xl/tight sm:text-4xl font-extrabold",
    h2: "text-2xl/tight",
  };

  const commonClasses = "font-bold";
  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link className="hover:text-slate-600 transition" href={url}>
        {children}
      </Link>
    </Tag>
  );
}
