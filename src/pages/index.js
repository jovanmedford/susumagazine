import * as React from "react"
import "@fontsource/lora"
import "@fontsource/lora/700.css"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import tw, { styled } from "twin.macro"
import HeroImage from "../components/HeroImage"
import BlogPostCardList from "../components/BlogPostCardList"
import HomeSection from "../components/HomeSection"
import FeaturedCard from "../components/card/FeaturedCard"
import BubbleLinkList from "../components/BubbleLinkList"
import MajorSection from "../components/sections/MajorSection"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const learnPosts = data.learn.nodes
  const creditUnionNewsPosts = data.creditUnionNews.nodes
  const featuredMain = data.featuredMain.nodes[0]
  const featuredSecondary = data.featuredSecondary.nodes
  const sidePosts = data.side.nodes

  return (
    <Layout>
      <Seo title="SUSU Magazine | Credit Union News and Personal Finance Blog" />
      <MajorSection>
          <FeaturedCard data={featuredMain} tw="col-span-1 md:mt-8" />
          <HomeSection title="Featured" tw="md:col-span-2">
             <BlogPostCardList postDataList={featuredSecondary} />
          </HomeSection>
      </MajorSection>
      <Body>
        {/* <MainContent>
          <HomeSection title="Featured">
             <BlogPostCardList postDataList={featuredSecondary} />
          </HomeSection>
          <HomeSection title="Credit Union">
            <BlogPostCardList postDataList={creditUnionNewsPosts} />
          </HomeSection>
        </MainContent> */}

        <svg
          tw="hidden lg:block mx-auto col-start-8 col-end-9"
          width="2.5rem"
          height="100%"
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
          <a href="https://school.thecaribbeanscholar.com/courses/set-theory">
            <StaticImage
              tw="rounded-sm max-w-md hidden lg:block"
              aspectRatio={1.2}
              src="../images/set-theory.png"
            />
            <span tw="hidden lg:block text-center block tracking-widest text-light">
              Advertisement
            </span>
          </a>
          <div>
            <h2 tw="font-bold text-primary-700 my-8 text-center md:text-left md:mt-0 md:mb-4 lg:mt-8 md:text-lg">
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

const Body = styled("div")`
  ${tw`w-11/12 max-w-sm mx-auto
       md:mx-8 md:max-w-none md:mt-8 lg:mt-12
       lg:ml-20
       grid grid-cols-1
       `}
  row-gap: 2rem;
  @media screen and (min-width: 1024px) {
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
      readingTime
      date(formatString: "MMM DD, YYYY")
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
