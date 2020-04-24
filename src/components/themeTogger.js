import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export const DarkModeToggler = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />{" "}
          Dark
        </label>
      )}
    </ThemeToggler>
  )
}
