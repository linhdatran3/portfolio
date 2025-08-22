import { ThemeProvider } from "next-themes";
import "./App.css";
import PrimaryLayout from "./components/layout/primary-layout";
import Homepage from "./components/pages/homepage/index";
import { Toaster } from "sonner";
import { Suspense } from "react";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <PrimaryLayout>
        <Suspense fallback={<div>Loading ...</div>}>
          <Homepage />
        </Suspense>
      </PrimaryLayout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
