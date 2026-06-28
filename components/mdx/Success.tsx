import { ReactNode } from "react";
import Callout from "./Callout";

export default function Success({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Callout
      variant="success"
      title="Success"
      icon="✅"
    >
      {children}
    </Callout>
  );
}