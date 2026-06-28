import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Tip({ children }: Props) {
  return (
    <div className="my-6 rounded-xl border border-green-300 bg-green-50 p-5 dark:border-green-700 dark:bg-green-950/30">
      <div className="mb-2 flex items-center gap-2 text-green-700 dark:text-green-300">
        💡 <span className="font-semibold">Tip</span>
      </div>

      <div>{children}</div>
    </div>
  );
}