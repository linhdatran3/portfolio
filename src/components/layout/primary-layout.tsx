import type { ReactNode } from "react";

const PrimaryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-screen overflow-y-auto">
      <div className="space-y-2">
        <p>LinhDa</p>
      </div>
      {children}
    </main>
  );
};

export default PrimaryLayout;
