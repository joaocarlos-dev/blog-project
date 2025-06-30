import clsx from "clsx";
import { useId } from "react";

type InputCheckboxProps = {
  labelText?: string;
  type?: string;
} & React.ComponentProps<"input">;

export function InputCheckbox({
  labelText = "",
  type = "checkbox",
  ...props
}: InputCheckboxProps) {
  const id = useId();

  return (
    <div className="flex gap-3 items-center">
      <input
        className={clsx(
          "w-4 h-4 outline-none focus:ring-2 focus:ring-blue-500",
          props.className
        )}
        id={id}
        type={type}
        {...props}
      />

      {labelText && (
        <label htmlFor={id} className="text-sm">
          {labelText}
        </label>
      )}
    </div>
  );
}
