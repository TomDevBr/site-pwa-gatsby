import React from "react"

import { algoliasearch } from "algoliasearch"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch"

import Hit from "./Hit"
import * as S from "./styled"

const Search = ({ algolia }) => {
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

  return (
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <SearchBox autoFocus placeholder="Pesquisar..." />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.SearchWrapper>
  )
}

export default Search
