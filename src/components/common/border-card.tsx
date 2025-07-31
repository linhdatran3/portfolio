import type { ReactNode } from "react";

interface BorderCardProps {
  children: ReactNode;
}
const BorderCard = ({ children }: BorderCardProps) => {
  return <div className="border rounded-2xl bg-accent">{children}</div>;
};

export { BorderCard };
