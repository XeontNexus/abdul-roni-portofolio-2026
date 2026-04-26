"use client";

import { useEffect } from "react";

export function ThemeScript() {
  useEffect(() => {
    try {
      if (localStorage.getItem("theme") === "light" ||
        (!("theme" in localStorage) &&
         window.matchMedia("(prefers-color-scheme: light)").matches)) {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }
    } catch (e) {}
  }, []);

  return null;
}
