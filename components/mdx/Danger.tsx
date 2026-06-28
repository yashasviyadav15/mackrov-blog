import { ReactNode } from "react";
import Callout from "./Callout";

export default function Danger({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Callout
      variant="danger"
      title="Danger"
      icon="🚨"
    >
      {children}
    </Callout>
  );
}