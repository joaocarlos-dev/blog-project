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
  return (
    <Tag className="text-2xl/tight font-extrabold mb-3 sm:text-4xl">
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
