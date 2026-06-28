import { ReactNode } from "react";
import Callout from "./Callout";

export default function Info({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Callout
      variant="info"
      title="Information"
      icon="ℹ️"
    >
      {children}
    </Callout>
  );
}