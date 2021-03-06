import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState, useMemo } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import SearchBox from "./SearchBox"
import SearchResult from "./SearchResults"
import useClickOutside from "./useClickOutside"
import tw, { styled, css } from "twin.macro"

const Popover = css`
  ${tw`absolute mt-2 bg-primary-700 inset-x-0 p-8 z-10 text-white`}
`

const StyledSearchResult = styled(SearchResult)`
  display: ${({ show }) => (show ? "block" : "none")};
  ${Popover}

  .HitCount {
    ${tw`text-md`}
  }

  mark {
    ${tw`bg-primary-900 text-white p-0.5`}
  }

  .Hits {
    h4 {
      ${tw`text-md mt-8 mb-1 text-primary-100 font-bold
           md:text-lg`}
    }
    span {
      ${tw`mt-2`}
    }
  }

  .PoweredBy {
    ${tw`mt-2`}
  }
`
const StyledSearchBox = styled(SearchBox)`
  .SearchInput {
    ${tw`w-full py-2 pl-2 mt-2 rounded-md shadow-md
         md:m-0`}
  }
`

export default function Search({ indices, className }) {
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
    <div className={className} ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <StyledSearchBox
          closePopOver={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          hasFocus={hasFocus}
        />
        <StyledSearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
        />
      </InstantSearch>
    </div>
  )
}
