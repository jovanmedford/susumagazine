import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { navigate } from "@reach/router"

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus, closePopOver }) => (
    <form
      onSubmit={e => {
        e.preventDefault()
        navigate(`/search/?query=${currentRefinement}`)
        closePopOver()
      }}
      className={className}
    >
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
    </form>
  )
)
