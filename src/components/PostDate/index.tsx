import { formatRelativeDate, formatDatetime } from "@/utils/format-datetime";

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className="text-slate-600 text-sm/tight"
      dateTime={dateTime}
      title={formatRelativeDate(dateTime)}
    >
      {formatDatetime(dateTime)}
    </time>
  );
}
