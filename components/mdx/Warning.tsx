import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Warning({ children }: Props) {
  return (
    <div className="my-6 rounded-xl border border-yellow-300 bg-yellow-50 p-5 dark:border-yellow-700 dark:bg-yellow-950/30">
      <div className="mb-2 flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
        ⚠️ <span className="font-semibold">Warning</span>
      </div>

      <div>{children}</div>
    </div>
  );
}