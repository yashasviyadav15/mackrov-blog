import { ReactNode } from "react";
import Callout from "./Callout";

export default function Note({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Callout
      variant="note"
      title="Note"
      icon="📝"
    >
      {children}
    </Callout>
  );
}