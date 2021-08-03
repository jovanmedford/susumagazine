import * as React from "react"
import Layout from "../components/Layout"
import PageHeading from "../components/PageHeading"
import { graphql } from "gatsby"
import Magazine from "../components/Magazine"
import tw, { styled } from "twin.macro"

const MagazineGrid = styled("ul")`
  ${tw`w-8/12 md:w-7/12 mx-auto mt-10 mb-16 block`}

  li {
    ${tw`mb-32`}
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem 1rem;

    li {
      ${tw`mb-0`}
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;

    li {
      ${tw`mb-0`}
    }
  }
`

const MagazineLibrary = ({ data }) => {
  console.log(data)
  const magazineDataList = data.allWpMediaItem.edges
  const Magazines = magazineDataList.map(data => (
    <li key={data.node.magazineDetails.link}>
      <Magazine data={data} />
    </li>
  ))

  return (
    <Layout>
      <PageHeading>Magazine Library</PageHeading>
      <p tw="mt-4 md:mt-8 text-center md:text-md">
        View any SUSU Magazine edition from the past 6 years.
      </p>
      <MagazineGrid>{Magazines}</MagazineGrid>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpMediaItem(
      filter: { title: { regex: "/susumagazine/" } }
      sort: { fields: magazineDetails___year, order: DESC }
    ) {
      edges {
        node {
          id
          magazineDetails {
            year
            link
          }
          localFile {
            childImageSharp {
              gatsbyImageData(aspectRatio: 0.9, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

export default MagazineLibrary
