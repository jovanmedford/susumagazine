import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import tw, { css } from "twin.macro"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const blogPostStyles = css`
  width: 90%;
  ${tw`mt-5 max-w-sm mx-auto`}

  p {
    ${tw`font-serif leading-normal mb-4`}
  }

  h2 {
    ${tw`mt-4 mb-2 font-medium text-lg`}
  }

  h3 {
    ${tw`mt-2 mb-1 font-medium text-md`}
  }

  strong {
    ${tw`font-bold`}
  }
`

function retieveImage(data) {
  let image = ""
  try {
    image = getImage(data.wpPost.featuredImage.node.localFile)
  } catch(e) {
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
      <section tw='mx-auto md:flex'>
      <div tw="ml-8 md:max-w-xs">
        <span tw="block mt-4 text-primary-700 text-lg">Personal Finance</span>
        <h1 tw="text-lg">{title}</h1>
        <div tw="flex mt-2">
          <img tw="w-14 h-14 mr-2 rounded-full" src={authorImg}/>
          <div>
            <span tw='block'>Last Modified: {date}</span>
            <span tw='block'>By {firstName} {lastName}</span>
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
