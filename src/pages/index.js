import "@fontsource/lora"
import "@fontsource/lora/700.css"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import tw, { styled } from "twin.macro"
import BlogPostCardList from "../components/BlogPostCardList"
import BubbleLinkList from "../components/BubbleLinkList"
import HeroCover from "../components/HeroCover"
import HeroImage from "../components/HeroImage"
import HomeSection from "../components/HomeSection"
import Layout from "../components/Layout"
import FeaturedCard from "../components/card/FeaturedCard"
import Heading from "../components/sections/Heading"
import InstitutionSection from "../components/sections/InstitutionSection"
import MajorSection from "../components/sections/MajorSection"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const learnPosts = data.learn.nodes
  const creditUnionNewsPosts = data.creditUnionNews.nodes
  const featuredMain = data.featuredMain.nodes[0]
  const featuredCreditUnion = data.featuredCreditUnion.nodes[0]
  const featuredSecondary = data.featuredSecondary.nodes
  const sidePosts = data.side.nodes
  const institutions = data.institutions.nodes

  return (
    <Layout>
      <Seo title="SUSU Magazine | Credit Union News and Personal Finance Blog" />
      <MajorSection>
      <Link tw="static col-span-2 transition ease-in-out bg-primary-100 hover:bg-primary-300 mt-6 mb-4 block"  to="susumagazine-2024">
        <div tw="h-32 flex justify-center items-center">
          <p tw="text-lg font-bold hidden lg:block">10th Anniversary Edition - Out Now!</p>
          <HeroCover />
        </div>
        </Link>
      </MajorSection>
      <MajorSection>
        <FeaturedCard
          data={featuredMain}
          tw="col-span-1 md:col-start-1 md:col-end-2 md:mr-7 lg:mr-9"
        />
        <HomeSection hasFullHeight tw="col-span-1 md:col-start-2 md:col-end-3">
          <BlogPostCardList postDataList={sidePosts} type="list" />
        </HomeSection>
      </MajorSection>
      <Body>
        <MainContent>
          <Heading>Featured</Heading>
          <HomeSection>
            <BlogPostCardList postDataList={featuredSecondary} />
          </HomeSection>
          <div tw="h-40 mt-10 transition ease-in-out bg-primary-100 hover:bg-primary-300 ">
            <HeroImage />
          </div>
        </MainContent>

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
            <span tw="hidden lg:block text-center tracking-widest text-light">
              Advertisement
            </span>
          </a>
          <div>
            <h2 tw="font-bold text-lg text-primary-700 mb-4 mt-8 text-left lg:mt-8 md:text-lg">
              Suggested Topics
            </h2>
          </div>
          <BubbleLinkList tw="mt-2" links={links} />
        </SideContent>
      </Body>
      {institutions ? <InstitutionSection institutions={institutions} /> : null}
      <MajorSection tw="md:mt-12 lg:mt-20">
        <Heading>Credit Union News</Heading>
        <HomeSection hasFullHeight tw="col-span-1 md:col-start-1 md:col-end-2">
          <BlogPostCardList postDataList={creditUnionNewsPosts} type="list" />
        </HomeSection>
        <FeaturedCard
          data={featuredCreditUnion}
          tw="hidden md:block col-span-1 md:col-start-2 md:col-end-3 md:ml-7 lg:ml-9"
        />
      </MajorSection>
      <HomeSection
        tw="mt-8 mx-4 md:mx-8 lg:mx-20 xl:mx-28 md:my-12 lg:my-16"
        title="More Stories"
      >
        <BlogPostCardList postDataList={learnPosts} />
      </HomeSection>
    </Layout>
  )
}

const Body = styled("div")`
  ${tw`w-11/12 mx-auto
       md:mx-8 md:max-w-none md:mt-12
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
    featuredCreditUnion: allWpPost(
      limit: 1
      filter: { section: { name: { eq: "featuredCreditUnion" } } }
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
    side: allWpPost(limit: 4, filter: { section: { name: { eq: "side" } } }) {
      ...PreviewInformation
    }
    institutions: allWpUser(
      filter: { custom: { isinstitution: { eq: true } } }
    ) {
      nodes {
        firstName
        avatar {
          url
        }
      }
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
