import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import tw, { css } from "twin.macro"
import { GatsbyImage } from "gatsby-plugin-image"
import retrieveImage from "../utils/retrieveImage"
import retrieveImageSrc from "../utils/retrieveImageSrc"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  const title = data.wpPost.title
  const content = data.wpPost.content
  const image = retrieveImage(data.wpPost)
  const imageSrc = retrieveImageSrc(data.wpPost)
  const firstName = data.wpPost.author.node.firstName
  const lastName = data.wpPost.author.node.lastName
  const authorImg = data.wpPost.author.node.avatar.url
  const authorBio = data.wpPost.author.node.description
  const date = data.wpPost.date
  const category =
    data.wpPost.categories &&
    (data.wpPost.categories.nodes[0].name === "Uncategorized"
      ? "Article"
      : data.wpPost.categories.nodes[0].name)
  const caption =
    data.wpPost.featuredImage && data.wpPost.featuredImage.node.caption
  return (
    <Layout>
      <SEO title={title} image={{ src: imageSrc, height: 1200, width: 630 }} />
      <section tw="mt-8 mx-auto md:flex md:w-10/12 max-w-2xl">
        <div tw="flex flex-col justify-center mx-auto w-11/12 max-w-xs md:w-6/12">
          <span tw="block mt-4 text-primary-700 text-lg">{category}</span>
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
      <div
        css={containerStyle}
        tw="font-bold font-sans"
        dangerouslySetInnerHTML={{ __html: caption }}
      ></div>
      <article
        css={blogPostStyles}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div css={bioStyle}>
        <hr />
        <p>{authorBio}</p>
        <hr />
      </div>
    </Layout>
  )
}

const containerStyle = css`
  ${tw`mt-5 mx-auto lg:mt-10`}

  width: 90%;
  max-width: 42ch;

  p {
    ${tw`font-serif leading-normal mb-4
         lg:text-md lg:mb-6`}
  }

  @media screen and (min-width: 768px) {
    max-width: 48ch;
  }

  @media screen and (min-width: 1024px) {
    max-width: 56ch;
  }
`

const blogPostStyles = css`
  ${containerStyle}

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

  ul,
  ol {
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-family: Lora, serif;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: auto;
  }

  li {
    margin-bottom: 0.5rem;
    ${tw`text-base lg:text-md`}
  }

  strong {
    ${tw`font-bold`}
  }

  figcaption {
    font-family: Lora, serif;
    ${tw`text-center`}
  }

  blockquote {
    ${tw`ml-4 border-primary-500`}
    border-left: 2px solid;
    padding: 1rem 0 0.5rem 1rem;
    background: #eeebf5;
  }
`

const bioStyle = css`
  ${containerStyle}

  p {
    ${tw`mt-4 font-bold`}
  }

  hr {
    border-top-width: 1.5px;
    ${tw`border-primary-500`};
  }
`

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      date(formatString: "MMM DD, YYYY")
      content
      categories {
        nodes {
          name
        }
      }
      author {
        node {
          firstName
          lastName
          description
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          caption
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
