import { getImage } from "gatsby-plugin-image"
export default function retrieveImage(data) {
  let image = ""
  try {
    image = getImage(data.featuredImage.node.localFile)
  } catch (e) {
    console.log(e)
  }
  return image
}
