import clsx from "clsx";
import { useId } from "react";

type InputTextProps = {
  labelText?: string;
} & React.ComponentProps<"input">;

export function InputText({ labelText = "", ...props }: InputTextProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label htmlFor={id} className="text-sm">
          {labelText}
        </label>
      )}
      <input
        className={clsx(
          "bg-white outline-0 text-base/tight",
          "ring-2 ring-slate-400 rounded",
          "py-2 px-2 transition focus:ring-blue-600",
          "placeholder-slate-300",
          "disabled:bg-slate-200",
          "disabled:text-slate-400",
          "disabled:placeholder-slate-400",
          "read-only:bg-slate-100"
        )}
        {...props}
        id={id}
      />
    </div>
  );
}
