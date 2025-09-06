import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(
      theme === "dark" ||
        (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [theme]);

  const toggleTheme = (checked: boolean) => {
    setIsDark(checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2 w-fit">
      <Sun className="h-4 w-4 text-yellow-500" />
      <Switch checked={isDark} onCheckedChange={toggleTheme} aria-label="switch" />
      <Moon className="h-4 w-4 text-blue-500" />
    </div>
  );
}
