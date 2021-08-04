import React, { useState } from "react"
import qs from "qs"
import Layout from "../components/Layout"
import algoliasearch from "algoliasearch/lite"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import {
  InstantSearch,
  Hits,
  Highlight,
  SearchBox,
} from "react-instantsearch-dom"

const urlToSearchState = ({ search }) => qs.parse(search.slice(1))
export default function Search({ location }) {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  const query = urlToSearchState(location).query
  return (
    <Layout>
      <div tw="mt-8 mx-8 lg:mx-20 xl:mx-28">
        <h1 tw="font-normal">
          Results for <span tw="text-accent-700">"{query}"</span>
        </h1>
        <InstantSearch
          searchClient={searchClient}
          indexName="Posts"
          searchState={urlToSearchState(location)}
        >
          <SearchBox tw="hidden" />
          <HitsContainer>
            <Hits hitComponent={Hit} />
          </HitsContainer>
        </InstantSearch>
      </div>
    </Layout>
  )
}

function Hit({ hit }) {
  return (
    <div tw="border-l-2 pl-2 border-primary-700 max-w-md">
      <Link to={`/${hit.slug}`}>
        <h3>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h3>
      </Link>
    </div>
  )
}

const HitsContainer = styled("div")`
  ul {
    ${tw`mt-4`}
    @media screen and (min-width: 768px) {
      display: grid;
      grid-gap: 20px 20px;
      grid-template-columns: 1fr 1fr;
    }
  }
`
