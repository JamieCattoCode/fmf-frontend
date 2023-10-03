import React, { useState } from 'react';
import FurnitureSearchForm from '../components/FurnitureSearchForm/FurnitureSearchForm';
import SearchResults from '../components/SearchResults/SearchResults';

const Explore = () => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div>
        <FurnitureSearchForm setSearchResults={setSearchResults} />
        {searchResults && <SearchResults results={searchResults} />}
    </div>
  )
}

export default Explore