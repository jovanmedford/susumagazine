import { getImage, getSrc } from "gatsby-plugin-image"
export default function retrieveImage(data) {
  let image = ""
  let src = ""
  try {
    image = getImage(data.featuredImage.node.localFile)
    src = getSrc(data.featuredImage.node.localFile)
  } catch (e) {
    console.log(e)
  }
  return { image, src }
}
