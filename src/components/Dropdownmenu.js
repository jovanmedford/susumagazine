import React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import tw from "twin.macro"

const Overlay = tw("div")`
  fixed  w-full h-full z-10 bg-primary-700 md:hidden 
  top-0 inset-x-full 
  transform transition ease-in-out duration-700 bg-opacity-0
`

const MenuLinksContainer = tw("ul")`
  fixed mt-40 ml-16 z-20  md:hidden 
  inset-x-full w-full h-full
  transform transition ease-in-out duration-700 bg-opacity-0
`

const MenuItem = tw(Link)`
  text-white text-xl block mb-8
`

const Menu = ({ isActive, handleClick }) => {
  const MenuLinks = links.map(link => (
    <MenuItem key={link.text} to={link.to}>
      {link.text}
    </MenuItem>
  ))
  return (
    <div>
      <Overlay css={[isActive && tw` bg-opacity-100 z-10 -translate-x-full`]} />
      <FontAwesomeIcon
        icon={faTimes}
        css={[tw`absolute hidden z-50 mr-4 text-white`, isActive && tw`block`]}
        style={{ width: "2rem", height: "2rem" }}
        onClick={handleClick}
      />
      <MenuLinksContainer
        css={[isActive && tw`bg-opacity-100 -translate-x-full`]}
      >
        {MenuLinks}
      </MenuLinksContainer>
    </div>
  )
}

const Dropdownmenu = () => {
  const [isActive, setActive] = useState(false)
  const closeMenu = () => setActive(false)
  return (
    <div>
      <FontAwesomeIcon
        onClick={() => setActive(true)}
        icon={faBars}
        style={{ width: "2rem", height: "2rem" }}
      />
      <Menu isActive={isActive} handleClick={closeMenu} />
    </div>
  )
}

export default Dropdownmenu

const links = [
  { to: "#", text: "Magazine Library" },
  { to: "#", text: "Write With Us" },
  { to: "#", text: "Contact" },
]
