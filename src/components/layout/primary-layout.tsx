import type { ReactNode } from "react";
import { Logo } from "../common/logo";

const PrimaryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative max-w-6xl w-full md:h-screen text-accent !m-auto flex flex-col px-4">
      <div className="bg-accent rounded-2xl h-[80px] ">
        <Logo className="w-full p-2 mt-2 mb-4" />
      </div>
      <div className="h-[calc(100vh-100px)] flex-1 py-4">{children}</div>
      {/* <ThemeToggle /> */}
      <footer className="h-[20px] text-center border-t text-foreground/60 text-xs">
        <p>Copy right @ 2025</p>
      </footer>
    </main>
  );
};

export default PrimaryLayout;
