import React from "react"
import BaseCard from "./BaseCard"

export default function ({ data, className }) {
  return <BaseCard
            data={data} 
            isLarge 
            hideImage 
            hideAuthorImage
            className={className}
            flexDirection="column"
             />
}
