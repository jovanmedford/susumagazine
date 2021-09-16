import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

const BubbleLink = styled(Link)(({ isActive }) => [
  tw`text-primary-700 bg-primary-100 py-1 px-6
  xl:text-md
  transition duration-200 ease-in
  hover:bg-primary-500
  hover:text-white
  focus-within:outline-accent 
  rounded-lg

  lg:mt-2 lg:mr-2 lg:mb-1
  mb-1 mr-1 md:mr-2 md:mb-0
 `,

  isActive && tw`bg-primary-700 text-white`,
])

const MagazineLink = tw("a")`
  px-8 py-1 block mt-2
  text-md text-center text-primary-700
  rounded-sm border-2 border-primary-700
  hover:bg-primary-100 
`

const HeaderLink = tw(Link)`
  text-primary-700
  hover:text-primary-300
  mr-4
  lg:mr-6 xl:text-md
`

const FooterLink = tw(Link)`
  text-primary-100
  hover:text-secondary-300
  mt-2
`

export { BubbleLink, HeaderLink, MagazineLink, FooterLink }
