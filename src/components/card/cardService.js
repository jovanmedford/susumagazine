import retrieveImage from "../../utils/retrieveImage"

export default function (data) {
  console.log(data)
  const title = data.title
  const firstName = data.author.node.firstName
  const lastName = data.author.node.lastName
  const excerpt = data.additionalPostData.excerpt
  const image = retrieveImage(data)
  const authorImageSrc = data.author.node.avatar.url
  const readingTime = data.readingTime
  const date = data.date
  return [
    title,
    firstName,
    lastName,
    excerpt,
    image,
    authorImageSrc,
    readingTime,
    date,
  ]
}
