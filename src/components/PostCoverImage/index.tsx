import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
  linkUrl: string;
};

export function PostCoverImage({
  imageProps,
  linkProps,
  linkUrl,
}: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "w-full",
        "h-full",
        "overflow-hidden",
        "rounded-xl",
        linkProps.className
      )}
      href={linkUrl}
    >
      <Image
        {...imageProps}
        className={clsx(
          "w-full",
          "h-full",
          "object-cover",
          "object-center",
          "group-hover:scale-105",
          "trasition",
          imageProps.className
        )}
        alt={imageProps.alt}
      ></Image>
    </Link>
  );
}
