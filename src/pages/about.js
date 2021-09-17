import React from "react"
import Layout from "../components/Layout"
import PageHeading from "../components/PageHeading"
import "twin.macro"
import { graphql } from "gatsby"
import { blogPostStyles } from "../templates/blogPostStyles"

export default function ({ data }) {
  const post = data.wpPost
  return (
    <Layout>
      <PageHeading>About Us</PageHeading>
      <article
        css={blogPostStyles}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPost(title: { eq: "About Us" }) {
      content
    }
  }
`
