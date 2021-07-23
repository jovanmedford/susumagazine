import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const BubbleLink = styled(Link)(({ isActive }) => [
  tw`text-primary-700 bg-primary-100 py-1 px-6
  lg:text-md
  transition duration-200 ease-in
  hover:bg-primary-500
  hover:text-white
  focus-within:outline-accent 
  rounded-lg
  whitespace-nowrap
  mr-2`,

  isActive && tw`bg-primary-700 text-white`,
])

const HeaderLink = tw(Link)`
  text-primary-700
  hover:text-primary-300
  mr-4
  lg:mr-6 lg:text-md
`

const FooterLink = tw(Link)`
  text-primary-100
  hover:text-secondary-300
  mt-2
`

export { BubbleLink, HeaderLink, FooterLink }
