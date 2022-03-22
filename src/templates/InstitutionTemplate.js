import { graphql } from "gatsby"
import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/Layout"

export default function InstitutionTemplate({ data }) {
  const firstName = data.wpUser.firstName
  const authorImg = data.wpUser.avatar.url
  const authorBio = data.wpUser.description
  return (
    <Layout>
      <h1>{firstName}</h1>
      <img tw="w-14 h-14 mr-2 rounded-full" src={authorImg} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpUser(id: { eq: $id }) {
      id
      firstName
      avatar {
        url
      }
    }
  }
`
