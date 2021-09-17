import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import tw, { styled } from "twin.macro"
import HeroImage from "../components/HeroImage"
import BlogPostCardList from "../components/BlogPostCardList"
import HomeSection from "../components/HomeSection"
import FeaturedCard from "../components/card/FeaturedCard"
import BubbleLinkList from "../components/BubbleLinkList"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
  const sidePosts = data.side.nodes

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
      <Body>
        <FeaturedCard data={featuredMain} tw="md:mt-8 lg:col-span-12" />
        <MainContent>
          <HomeSection title="Featured">
            <BlogPostCardList postDataList={featuredSecondary} />
          </HomeSection>
          <HomeSection title="Credit Union News">
            <BlogPostCardList postDataList={creditUnionNewsPosts} />
          </HomeSection>
          <HomeSection title="Learn">
            <BlogPostCardList postDataList={learnPosts} />
          </HomeSection>
        </MainContent>

        <svg
          tw="hidden lg:block"
          width="2.5"
          tw="col-start-8 col-end-9"
          height="100%"
          tw="mx-auto"
        >
          <line
            x1="0"
            x2="0"
            strokeWidth="2.5"
            y1="0"
            y2="100%"
            stroke="#DEDDE4"
          ></line>
        </svg>

        <SideContent>
          <StaticImage
            tw="rounded-sm"
            aspectRatio={1.2}
            src="../images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg"
          />
          <div>
            <h2 tw="font-bold text-primary-700 my-8 text-center md:text-left md:mt-8 md:text-lg">
              Suggested Topics
            </h2>
          </div>
          <BubbleLinkList tw="mt-2" links={links} />
          <h2 tw="font-bold text-primary-700 my-8 text-center md:text-left md:mt-8 md:text-lg">
            Editor's Picks
          </h2>
          <BlogPostCardList postDataList={sidePosts} type="side" />
        </SideContent>
      </Body>
    </Layout>
  )
}

const Body = styled("div")`
  ${tw`w-10/12 max-w-xs mx-auto
       md:mx-8 md:max-w-none md:mt-8 lg:mt-12
       lg:ml-20`}
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: 20px;
    row-gap: 3rem;
  }
`

const MainContent = styled("div")`
  ${tw`lg:col-span-7`}
`

const SideContent = styled("div")`
  ${tw`w-full lg:col-start-9 lg:col-end-13`}
`

const links = [
  { text: "SUSU", to: "/search/?query=SUSU" },
  { text: "FSC", to: "/search/?query=FSC" },
  { text: "Compliance", to: "/search/?query=Compliance" },
  { text: "Credit Unions", to: "/search/?query=Credit+Unions" },
  { text: "Finance", to: "/search/?query=Finance" },
]

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
    side: allWpPost(limit: 3, filter: { section: { name: { eq: "side" } } }) {
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
          avatar {
            url
          }
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
