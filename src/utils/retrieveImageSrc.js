import { getSrc } from "gatsby-plugin-image"

export default function retrieveImageSrc(data) {
  let src = ""
  try {
    src = getSrc(data.featuredImage.node.localFile)
  } catch (e) {
    console.log(e)
  }
  return src
}
