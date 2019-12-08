import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <div>
        <h1>
          Hey, I'm Jake{" "}
          <span role="img" aria-label="wave emoji">
            👋🏼
          </span>
        </h1>
        <p>I'm a software engineer living in Erie, Pennsylvania.</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
