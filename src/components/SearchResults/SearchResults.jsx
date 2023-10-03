import React from 'react'
import './styles.css';
import SingleSearchResult from '../SingleSearchResult/SingleSearchResult';

const SearchResults = ({ results }) => {
  return (
    <div>
        {results.map((searchResult) => {
                return <SingleSearchResult key={searchResult.url} data={searchResult} />
            })}
    </div>
  )
}

export default SearchResults