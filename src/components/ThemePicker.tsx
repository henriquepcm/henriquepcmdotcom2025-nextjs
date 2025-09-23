"use client";
import ChevronIcon from "./icons/ChevronIcon";
import ThemeListItem from "./ThemeListItem";
import { useEffect, useState } from "react";

export default function ThemePicker() {
  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("dark-violet");
  const themeList = ["dark-violet", "near-black", "wireframe"];

  function handleThemePickerVisibility() {
    setIsThemePickerOpen((prev) => !prev);
  }

  function handleThemePicked(theme: string) {
    setSelectedTheme(theme);
    handleThemePickerVisibility();
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setSelectedTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      selectedTheme.toLowerCase(),
    );
    localStorage.setItem("theme", selectedTheme);
  }, [selectedTheme]);

  const arrowDirectionStyles = isThemePickerOpen ? "rotate-180" : "rotate-0";

  return (
    <>
      <button
        onClick={handleThemePickerVisibility}
        id="theme-button"
        aria-haspopup="true"
        aria-expanded={isThemePickerOpen}
        aria-controls="theme-menu"
        className="h-12 w-32 transform flex-col rounded-md border border-brandprimary p-3 text-[0.6rem] text-brandprimary duration-500 hover:bg-brandaccent"
      >
        <div className="flex items-center justify-between">
          <div className="text-start text-brandtextprimary">
            {selectedTheme}
          </div>
          <div>
            <span
              className={`${arrowDirectionStyles} flex w-3 transform text-brandtextprimary duration-300`}
            >
              <ChevronIcon />
            </span>
          </div>
        </div>
      </button>
      {isThemePickerOpen && (
        <ul
          id="theme-menu"
          aria-labelledby="theme-button"
          className="absolute bottom-12 w-32 transform flex-col rounded-md border border-brandprimary bg-brandsurface p-2 text-[0.6rem] text-brandprimary"
        >
          {themeList.map((theme) => {
            const isSelected = theme === selectedTheme;
            return (
              <ThemeListItem
                isSelected={isSelected}
                key={theme}
                themeName={theme}
                onClick={() => handleThemePicked(theme)}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
