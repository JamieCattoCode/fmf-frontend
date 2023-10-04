import React from 'react'
import './styles.css';
import SingleSearchResult from '../SingleSearchResult/SingleSearchResult';

import './styles.css';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results-wrapper">
        {results.map((searchResult) => {
                return <SingleSearchResult key={searchResult.url} data={searchResult} />
            })}
    </div>
  )
}

export default SearchResults