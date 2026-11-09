"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ThemeToggle() {
  const t = useTranslations("Header");

  const toggleTheme = () => {
    const root = document.documentElement;
    const theme = root.dataset.theme === "dark" ? "light" : "dark";

    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // The current page still switches themes when storage is unavailable.
    }
  };

  const label = t("themeToggle");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="theme-toggle flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <Sun className="theme-toggle-light-icon" size={18} />
      <Moon className="theme-toggle-dark-icon" size={18} />
    </button>
  );
}
