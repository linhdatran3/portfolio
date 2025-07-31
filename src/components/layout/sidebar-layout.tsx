import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SidebarLayoutProps {
  sidebarContent: ReactNode;
  mainContent: ReactNode;
  className?: string;
}

const SidebarLayout = ({ sidebarContent, mainContent, className }: SidebarLayoutProps) => {
  return (
    <div className={cn("space-y-2 md:flex md:space-y-0 md:gap-4", className)}>
      {sidebarContent}
      {mainContent}
    </div>
  );
};

export default SidebarLayout;
