import { ThemeProvider } from "next-themes";
import "./App.css";
import PrimaryLayout from "./components/layout/primary-layout";
import Homepage from "./components/pages/homepage";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <PrimaryLayout>
        <Homepage />
      </PrimaryLayout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
