import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const BubbleLink = styled(Link)(({ isActive }) => [
  tw`text-primary-700 bg-primary-100 py-1 px-6
  md:text-md
  hover:bg-primary-300
  focus-within:outline-accent 
  rounded-lg
  whitespace-nowrap
  mr-2`,

  isActive && tw`bg-primary-700 text-white`,
])

export { BubbleLink }
