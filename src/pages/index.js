import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import homeStyles from "../styles/home.module.scss"

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
        <Image className={homeStyles.jakeImg} />
        <p>
          I'm a software engineer living in Erie, Pennsylvania and am currently
          working at a Fortune 500 insurance company called{" "}
          <a href="https://www.erieinsurance.com/">Erie Insurance.</a>
          <br />
          <br /> I recently completed Erie Insurance's IT Apprentice program, a
          rotational program that gave me the opportunity to become part of a
          new team every six months for the past two years. During this time, I
          helped teams all over the IT organization solve a wide range of
          software engineering problems.
          <br />
          <br />
          My current role is focused on platform engineering and AWS cloud
          infrastructure automation using tools like Python and Terraform. My
          team is working to create tooling to allow our IT and business
          partners to provision cloud infrastructure on demand and making the
          transition into DevOps.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
