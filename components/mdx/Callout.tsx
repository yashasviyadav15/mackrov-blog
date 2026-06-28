import { ReactNode } from "react";

type Variant =
  | "tip"
  | "warning"
  | "info"
  | "note"
  | "danger"
  | "success";

type Props = {
  title: string;
  variant: Variant;
  icon: string;
  children: ReactNode;
};

const variants = {
  tip: {
    border: "border-green-300 dark:border-green-700",
    bg: "bg-green-50 dark:bg-green-950/30",
    text: "text-green-800 dark:text-green-300",
  },

  warning: {
    border: "border-yellow-300 dark:border-yellow-700",
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    text: "text-yellow-800 dark:text-yellow-300",
  },

  info: {
    border: "border-blue-300 dark:border-blue-700",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-800 dark:text-blue-300",
  },

  note: {
    border: "border-zinc-300 dark:border-zinc-700",
    bg: "bg-zinc-100 dark:bg-zinc-900",
    text: "text-zinc-800 dark:text-zinc-200",
  },

  danger: {
    border: "border-red-300 dark:border-red-700",
    bg: "bg-red-50 dark:bg-red-950/30",
    text: "text-red-800 dark:text-red-300",
  },

  success: {
    border: "border-emerald-300 dark:border-emerald-700",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    text: "text-emerald-800 dark:text-emerald-300",
  },
};

export default function Callout({
  variant,
  title,
  icon,
  children,
}: Props) {
  const style = variants[variant];

  return (
    <div
      className={`my-8 rounded-xl border p-5 ${style.border} ${style.bg}`}
    >
      <div
        className={`mb-3 flex items-center gap-2 font-semibold ${style.text}`}
      >
        <span className="text-xl">{icon}</span>

        {title}
      </div>

      <div>{children}</div>
    </div>
  );
}