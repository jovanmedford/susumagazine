import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import tw, { css } from "twin.macro"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const blogPostStyles = css`
  ${tw`mt-5 mx-auto lg:mt-10`}
  width: 90%;

  max-width: 42ch;

  @media screen and (min-width: 768px) {
    max-width: 48ch;
  }

  @media screen and (min-width: 1024px) {
    max-width: 56ch;
  }

  p {
    ${tw`font-serif leading-normal mb-4
         lg:text-md lg:mb-6`}
  }

  h2 {
    ${tw`mt-8 mb-2 font-bold text-primary-500 text-lg 
        lg:text-xl lg:mt-12
        `}
  }

  h3 {
    ${tw`mt-6 mb-4 font-bold text-md 
        lg:text-lg lg:mt-10 lg:mb-6`}
  }

  a {
    ${tw`text-primary-700 underline`}
  }

  strong {
    ${tw`font-bold`}
  }
`

function retieveImage(data) {
  let image = ""
  try {
    image = getImage(data.wpPost.featuredImage.node.localFile)
  } catch (e) {
    console.log(e)
  }
  return image
}

const BlogPostTemplate = ({ data }) => {
  const title = data.wpPost.title
  const content = data.wpPost.content
  const image = retieveImage(data)
  const firstName = data.wpPost.author.node.firstName
  const lastName = data.wpPost.author.node.lastName
  const authorImg = data.wpPost.author.node.avatar.url
  const date = data.wpPost.date

  return (
    <Layout>
      <section tw="mt-8 mx-auto md:flex md:w-10/12 max-w-2xl">
        <div tw="flex flex-col justify-center mx-auto w-11/12 max-w-xs md:w-6/12">
          <span tw="block mt-4 text-primary-700 text-lg">Personal Finance</span>
          <h1 tw="text-lg">{title}</h1>
          <div tw="flex mt-2">
            <img tw="w-14 h-14 mr-2 rounded-full" src={authorImg} />
            <div>
              <span tw="block">Last Modified: {date}</span>
              <span tw="block">
                By {firstName} {lastName}
              </span>
            </div>
          </div>
        </div>
        <GatsbyImage tw="mt-4 rounded-lg mx-auto" image={image} />
      </section>
      <article
        css={blogPostStyles}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      date(formatString: "MMMM DD, YYYY")
      content
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
                layout: FIXED
                width: 352
                height: 198
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`

export default BlogPostTemplate
