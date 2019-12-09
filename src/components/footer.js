import React from "react"
import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>Jake Wheeler © {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
