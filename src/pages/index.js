import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import tw from "twin.macro"
import HeroImage from "../components/HeroImage"
import BlogPostCardList from "../components/BlogPostCardList"
import HomeSection from "../components/HomeSection"
import FeaturedCard from "../components/card/FeaturedCard"
import { graphql } from "gatsby"

const SectionHeading = tw("h2")`
text-center font-bold text-primary-700
mt-10 md:mt-8 md:text-left md:ml-8
lg:ml-20 
`
const HeroBanner = tw("div")`
  mt-4 pt-8 px-8 pb-20 bg-secondary-700
  md:mt-8 md:pt-12
  lg:mx-8 lg:py-16 lg:px-12 lg:rounded-lg
  xl:px-24
`

const IndexPage = ({ data }) => {
  const learnPosts = data.learn.nodes
  const creditUnionNewsPosts = data.creditUnionNews.nodes
  const featuredMain = data.featuredMain.nodes[0]
  const featuredSecondary = data.featuredSecondary.nodes

  return (
    <Layout>
      <Seo title="Home" />
      <HeroBanner>
        <h1 tw="text-white">Let's Talk About Money</h1>
        <p tw="text-white mt-2 md:text-md md:w-2/3 lg:w-7/12">
          Stay up to date with the latest trends in Credit Union News and
          Personal Finance.
        </p>
      </HeroBanner>
      <HeroImage />
      <HomeSection>
        <FeaturedCard data={featuredMain} />
      </HomeSection>
      <HomeSection title="Featured" tw="md:mt-8">
        <BlogPostCardList postDataList={featuredSecondary} />
      </HomeSection>
      <HomeSection title="Credit Union News">
        <BlogPostCardList postDataList={creditUnionNewsPosts} />
      </HomeSection>
      <HomeSection title="Learn">
        <BlogPostCardList postDataList={learnPosts} />
      </HomeSection>
    </Layout>
  )
}

export const query = graphql`
  query {
    featuredMain: allWpPost(
      limit: 1
      filter: { section: { name: { eq: "featuredMain" } } }
    ) {
      ...PreviewInformation
    }
    featuredSecondary: allWpPost(
      limit: 3
      filter: { section: { name: { eq: "featuredSecondary" } } }
    ) {
      ...PreviewInformation
    }
    creditUnionNews: allWpPost(
      limit: 3
      filter: { section: { name: { eq: "creditUnionNews" } } }
    ) {
      ...PreviewInformation
    }
    learn: allWpPost(limit: 3, filter: { section: { name: { eq: "learn" } } }) {
      ...PreviewInformation
    }
  }

  fragment PreviewInformation on WpPostConnection {
    nodes {
      title
      slug
      additionalPostData {
        excerpt
      }
      categories {
        nodes {
          name
        }
      }
      author {
        node {
          firstName
          lastName
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                aspectRatio: 1.77
              )
            }
          }
        }
      }
    }
  }
`

export default IndexPage
