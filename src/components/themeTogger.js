import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Toggle from "react-toggle"
import { IoMdMoon, IoMdSunny } from "react-icons/io"
import "../styles/toggler.css"

export const DarkModeToggler = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Toggle
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
          aria-label="Dark mode"
          icons={{
            checked: <IoMdMoon />,
            unchecked: <IoMdSunny />,
          }}
        />
      )}
    </ThemeToggler>
  )
}
