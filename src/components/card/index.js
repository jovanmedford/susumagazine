import React from "react"
import BaseCard from "./BaseCard"
import SideCard from "./SideCard"
import FeaturedCard from "./FeaturedCard"
import ListCard from "./ListCard"

export default function Card({ data, type }) {
  return {
    list: <ListCard data={data} />,
    featured: <FeaturedCard data={data} />,
    side: <SideCard data={data} />,
    default: <BaseCard data={data} />,
  }[type]
}

Card.defaultProps = {
  type: "default",
}
