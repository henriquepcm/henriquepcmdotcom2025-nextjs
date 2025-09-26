"use client";
import { useTheme } from "next-themes";
import ChevronIcon from "./icons/ChevronIcon";
import ThemeListItem from "./ThemeListItem";
import { useEffect, useState } from "react";
import { Spinner } from "./icons/Spinner";

export default function ThemePicker() {
  //————— next-themes hook ————————————————————
  const { theme, setTheme } = useTheme();

  //————— States ————————————————————
  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [mounted, setMounted] = useState(false);

  //————— List of available themes ————————————————————
  // Add the color palette to globals.css before updating this list.
  const themeList = ["dark-violet", "near-black", "wireframe"];

  //————— Event Handlers ————————————————————
  function handleThemePickerVisibility() {
    setIsThemePickerOpen((prev) => !prev);
  }

  function handleThemePicked(theme: string) {
    setTheme(theme);
    setSelectedTheme(theme);
    handleThemePickerVisibility();
  }

  //————— Styles ————————————————————
  const arrowDirectionStyles = isThemePickerOpen ? "rotate-180" : "rotate-0";
  const btnDefaultClasses =
    "h-12 w-32 transform rounded-md border border-brandprimary p-3 text-[0.6rem] text-brandprimary duration-500 hover:bg-brandaccent";

  //————— Handle Hydration Mismatch ————————————————————
  // Intentional to prevent flicker on page load.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <button
        disabled
        aria-controls="theme-menu"
        id="theme-button"
        className={`${btnDefaultClasses} flex items-center justify-center opacity-30`}
      >
        <Spinner className="size-6 animate-spin" />
      </button>
    );
  //—————

  return (
    <>
      <button
        onClick={handleThemePickerVisibility}
        id="theme-button"
        aria-haspopup="true"
        aria-expanded={isThemePickerOpen}
        aria-controls="theme-menu"
        className={`${btnDefaultClasses}`}
      >
        <div className="flex items-center justify-between">
          <div className="text-start text-brandtextprimary">
            {!selectedTheme ? "" : selectedTheme}
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
