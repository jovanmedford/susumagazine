import React from "react"
import BaseCard from "./BaseCard"

export default function ({ data,className }) {
  return <BaseCard
            data={data} 
            isLarge 
            hasLargeTitle
            hasFullImage 
            hasUnderline
            showExcerpt
            className={className}
            flexDirection="column"
             />
}
