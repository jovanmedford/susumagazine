import React from "react"
import { Link } from "gatsby"
import "twin.macro"

export default function InstitutionCard({ institution }) {
  const link = `institutions/${institution.firstName
    .replace(/\s+/g, "-")
    .toLowerCase()}`
  return (
    <Link to={link} tw="flex md:flex-row items-center my-4 md:my-0">
      <img tw="w-20 mb-2 md:mb-0 md:mr-2" src={institution.avatar.url} />
      <h3 tw="ml-4 md:ml-0 text-md">{institution.firstName}</h3>
    </Link>
  )
}
