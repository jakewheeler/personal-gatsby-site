import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>
      This page doesn't exist{" "}
      <span role="img" aria-label="sad emoji">
        😢
      </span>
    </h1>
  </Layout>
)

export default NotFoundPage
