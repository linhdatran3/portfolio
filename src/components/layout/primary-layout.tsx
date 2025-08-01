import type { ReactNode } from "react";
import { ThemeToggle } from "../common/theme-toggle";
import { Logo } from "../common/logo";

const PrimaryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative max-w-6xl w-full md:h-screen md:overflow-y-hidden text-accent !m-auto">
      <div className="bg-accent rounded-2xl">
        <Logo className="w-full p-2 mt-2 mb-4" />
      </div>
      {children}
      <ThemeToggle />
      <footer className="mt-8 text-center border-t text-foreground/60 text-xs p-2">
        <p>Copy right</p>
      </footer>
    </main>
  );
};

export default PrimaryLayout;
