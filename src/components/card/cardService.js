import retrieveImage from "../../utils/retrieveImage"

export default function (data) {
  const title = data.title
  const firstName = data.author.node.firstName
  const lastName = data.author.node.lastName
  const image = retrieveImage(data)
  return [title, firstName, lastName, image]
}
