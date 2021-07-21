import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const BubbleLink = styled(Link)(({ isActive }) => [
  tw`text-primary-700 bg-primary-100 py-1 px-6
  md:text-md
  transition duration-200 ease-in
  hover:bg-primary-500
  hover:text-white
  focus-within:outline-accent 
  rounded-lg
  whitespace-nowrap
  mr-2`,

  isActive && tw`bg-primary-700 text-white`,
])

export { BubbleLink }
