import tw from "twin.macro"
import { Link } from "gatsby"

const BubbleLink = tw(Link)`
  text-primary-700 bg-primary-100 py-1 px-6
  md:text-md
  hover:bg-primary-300
  focus-within:outline-accent 
  rounded-lg
`

export { BubbleLink }
