import retrieveImage from "../../utils/retrieveImage"

export default function (data) {
  console.log(data)
  const title = data.title
  const firstName = data.author.node.firstName
  const lastName = data.author.node.lastName
  const excerpt = data.additionalPostData.excerpt
  const image = retrieveImage(data)
  return [title, firstName, lastName, excerpt, image]
}
