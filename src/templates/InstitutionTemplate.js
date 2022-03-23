import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/Layout"

export default function InstitutionTemplate({ data }) {
  const firstName = data.wpUser.firstName
  const authorImg = data.wpUser.avatar.url
  const authorBio = data.wpUser.description
  const posts = data.wpUser.posts.nodes
  console.log(data)
  return (
    <Layout>
      <div tw="mt-9 mx-auto mx-8 lg:mx-20 xl:mx-28">
        <div tw="flex justify-center md:justify-start">
          <Circle />
          <span tw="mx-1 font-bold text-accent-700 block text-center md:text-left">
            Institutions
          </span>
          <Circle />
        </div>
        <div tw="mt-6 text-center block md:text-left md:flex">
          <img
            tw="inline w-28 h-28 mr-2 rounded-full md:mr-11"
            src={authorImg}
          />
          <div tw="max-w-lg">
            <h1 tw="font-serif text-lg md:text-xl mt-4 mb-2">{firstName}</h1>
            <Underline />
            <p tw="font-serif mt-2">{authorBio}</p>
          </div>
        </div>
        <ul tw="mt-12 md:mt-20">
          {posts.map(post => (
            <li tw="mb-20">
              <Link to={`/${post.slug}`}>
                <div tw="md:flex">
                  <div tw="w-56 mx-auto md:ml-0 text-center md:mr-4 md:text-left">
                    <GatsbyImage image={getPostImage(post)} />
                  </div>
                  <div tw="text-center md:text-left max-w-md lg:max-w-xl">
                    <h2 tw="mt-4 md:mt-0 font-serif font-bold text-md md:text-lg">
                      {post.title}
                    </h2>
                    {post.additionalPostData.excerpt !== "default" && (
                      <p>{post.additionalPostData.excerpt}</p>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

const Circle = () => (
  <svg tw="w-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <circle fill="#4FB0C6" cx="10" cy="10" r="5" />
  </svg>
)

const Underline = () => <hr tw="border-accent-500 border-2"></hr>

const getPostImage = post => {
  let image = ""
  try {
    image = getImage(post.featuredImage.node.localFile)
  } catch (e) {
    console.log(e)
  }
  return image
}

export const query = graphql`
  query ($id: String) {
    wpUser(id: { eq: $id }) {
      id
      firstName
      description
      avatar {
        url
      }
      posts {
        nodes {
          title
          slug
          additionalPostData {
            excerpt
          }
          featuredImage {
            node {
              caption
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    aspectRatio: 1.77
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
