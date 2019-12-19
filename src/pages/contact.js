import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>
        Please feel free to reach out to me on Twitter at{" "}
        <a
          href="https://www.twitter.com/_jakewheeler"
          target="_blank"
          rel="noopener noreferrer"
        >
          @_jakewheeler
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/jake-wheeler-416a74180/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        ! 😁
      </p>
    </Layout>
  )
}

export default ContactPage
