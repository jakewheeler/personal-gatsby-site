import React from "react"
import footerStyles from "../styles/footer.module.scss"

// social media icons
import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div>
        <p>Jake Wheeler © {new Date().getFullYear()}</p>
      </div>
      <div>
        <nav className={footerStyles.socialNav}>
          <ul className={footerStyles.socialList}>
            <li className={footerStyles.socialListItem}>
              <a
                href="https://twitter.com/_jakewheeler"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt={"Twitter"} />
              </a>
            </li>
            <li className={footerStyles.socialListItem}>
              <a
                href="https://www.linkedin.com/in/jake-wheeler-416a74180/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt={"LinkedIn"} />
              </a>
            </li>
            <li className={footerStyles.socialListItem}>
              <a
                href="https://github.com/jakewheeler"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt={"GitHub"} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
