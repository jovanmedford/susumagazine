import React from "react"
import Layout from "../components/Layout"
import tw, { styled } from "twin.macro"
import summaryData from "../data/summaries.json"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const MagazineLink = tw("a")`
  px-8 py-1 block mt-2
 text-center text-primary-700
  rounded-sm border-2 border-primary-700
  hover:bg-primary-100  hover:cursor-pointer
  w-56
`

const DownlaodLink = tw("a")`
  px-8 py-1 block mt-2 text-white
  text-center bg-primary-700
  rounded-sm 
  hover:bg-primary-500
  hover:cursor-pointer
  w-56
`

const ContainerStyle = styled("section")`
  p {
    ${tw`font-serif`}
  }

  span {
    ${tw`font-serif`}
  }
`

const StyledSection = styled("section")`
  ${tw`px-8 py-8 md:py-12 mt-4 mx-auto w-10/12`}
`

const SusuMagazineTwentyFour = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  const summaries = summaryData.map(summary => {
    const imageNode = data.allFile.edges.find(
      edge => edge.node.base === summary.author.img
    )
    return {
      ...summary,
      author: {
        ...summary.author,
        img: imageNode ? getImage(imageNode.node.childImageSharp) : "", // Get public URL
      },
    }
  })
  return (
    <Layout>
      <ContainerStyle>
        <section tw="bg-secondary-50 px-8 py-8 md:py-12 mt-4 md:flex">
          <div tw="md:mx-auto md:flex">
            <h1 tw="text-center text-md md:hidden mt-4 mx-auto">
              Our 10th Anniversary Special Edition is Now Available!
            </h1>
            <StaticImage
              tw="w-48 my-4 mx-auto md:ml-0 md:mr-8 lg:mr-20 md:w-60 md:my-0 shadow-sm md:shadow-2xl hover:cursor-pointer"
              src="../images/susumagazine-2024-v3.jpg"
              alt="2024 Magazine"
              aspectRatio={0.717}
              layout="fullWidth"
            />

            <MagazineLink tw="mx-auto md:hidden">Read Online</MagazineLink>
            <DownlaodLink tw="mx-auto md:hidden">Download PDF</DownlaodLink>

            {/* Tablet and Desktop */}
            <div tw="hidden md:flex flex-col max-w-xl">
              <h1 tw="text-xl mb-4 mt-8">
                Our 10th Anniversary Special Edition is Now Available!
              </h1>
              <p tw="text-md font-serif">
                Get expert analysis, practical advice, and in-depth discussions
                on the issues that shape our future.
              </p>
              <div tw="flex mt-4">
                <MagazineLink tw="mr-2">Read Online</MagazineLink>
                <DownlaodLink>Download PDF</DownlaodLink>
              </div>
            </div>
          </div>
        </section>

        <section tw="px-8 py-8 md:py-12 mt-4 mx-auto w-11/12 xl:w-10/12">
          <h2 tw="text-md md:text-xl mb-4">
            What’s Inside the 10th Anniversary Edition?
          </h2>
          <p tw="font-serif">
            Insightful Discussions, Expert Commentary, and More.
          </p>
          <div tw="mt-20 md:grid md:grid-cols-2 md:gap-y-12 md:gap-x-8 justify-items-center">
            {summaries.map(summary => {
              const image = summary.author.img
              return (
                <div tw="mb-12 md:mb-0 max-w-xl">
                  <div tw="self-center w-max mx-auto mb-8">
                    <GatsbyImage
                      tw="w-32 my-4 mx-auto md:ml-0 md:mr-8 lg:mr-20 md:w-40 md:my-0 shadow-sm md:shadow-2xl hover:cursor-pointer rounded-full"
                      image={image}
                      alt={summary.id}
                    />
                  </div>
                  <span tw="block italic text-center mb-4">{summary.author.tagline}</span>
                  <h3 tw="text-md">{summary.heading}</h3>
                  <p>{summary.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section tw="bg-secondary-100 px-8 py-8 md:py-12 mt-4">
          <h2 tw="text-md md:text-xl mb-4">
            About the 10th Anniversary Edition
          </h2>
          <div>
            <div>
              <span tw="block">Dalton Medford</span>
              <span tw="block">Co-Owner, SUSU Magazine</span>
            </div>

            <p>
              When we started SUSU in 2015, we believed that we could establish
              a magazine that highlighted the relevance and impact of Credit
              Unions in Barbados. We also wanted to provide a platform for
              authors to expand on key topics that required detailed
              explanations. Even more so, we hoped that this platform would be
              used to challenge unions where necessary. With your continued
              support we have been able to do this for 10 years and this is only
              the beginning.
            </p>
          </div>
        </section>

        <section tw="px-8 py-8 md:py-12 mt-4">
          <h2 tw="text-md md:text-xl mb-4">To Our Sponsors,</h2>
          <p>
            Thank for your support! Without you this publication would not be
            possible.
          </p>
          <div></div>
        </section>

        {/* <section>
          <h2>Let's keep in touch!</h2>
          <p>
            We are thinking about starting a monthly newsletter. If this
            interests you, or you’d like updates about the 11th edition, use the
            sign-up form below.
          </p>
        </section> */}
      </ContainerStyle>
    </Layout>
  )
}

export default SusuMagazineTwentyFour
