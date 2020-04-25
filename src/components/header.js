import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "../styles/header.module.scss"
import { DarkModeToggler } from "./themeTogger"

const Header = ({ siteTitle }) => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerFlex}>
        <h1>
          <Link className={headerStyles.title} to="/">
            {siteTitle}
          </Link>
        </h1>
        <div className={headerStyles.headerFlexItem}>
          <DarkModeToggler />
        </div>
      </div>

      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
