import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>
        You can reach out to me on Twitter via
        <a href="https://www.twitter.com/_jakewheeler" target="_blank">
          @_jakewheeler
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
