import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState, useMemo } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import SearchBox from "./SearchBox"
import SearchResult from "./SearchResults"
import useClickOutside from "./useClickOutside"
import { styled } from "twin.macro"

const StyledSearchResult = styled(SearchResult)`
  display: ${({ show }) => (show ? "block" : "none")};
`

export default function Search({ indices }) {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

  useClickOutside(rootRef, () => setFocus(false))

  return (
    <div tw="hidden md:block" ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <StyledSearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
        />
      </InstantSearch>
    </div>
  )
}
