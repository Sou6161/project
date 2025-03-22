// components/theme-toggle.tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@radix-ui/themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="soft"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`rounded-full w-10 h-10 p-0 flex items-center justify-center transition-colors ${
          theme === "dark"
            ? "bg-gray-800 hover:bg-gray-700"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        <Sun
          className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-600 dark:text-yellow-400"
        />
        <Moon
          className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white dark:text-gray-300"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}