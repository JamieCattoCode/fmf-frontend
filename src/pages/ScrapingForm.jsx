import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { getItemsByType, getFurnitureTypes } from '../requests';
import SearchResults from '../components/SearchResults/SearchResults';

const ScrapingForm = () => {
  const [selection, setSelection] = useState('title');
  const [furniture, setFurniture] = useState([]);
  const [furnitureTypes, setFurnitureTypes] = useState([]);

  useEffect(() => {
    getFurnitureTypes()
        .then(({ furniture_types }) => {
            setFurnitureTypes(furniture_types);
            console.log(furniture_types);
        })
        .catch(({ message }) => console.log(message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    getItemsByType(selection)
        .then(({ furniture: furnitureData }) => {
            setFurniture(furnitureData);
        })
        .catch(({ message }) => console.log(message));
  };

  const  firstCharToUC = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div>
        <form className='selection-form' onSubmit={handleSubmit}>
            <label>
                Select what you want to scrape...
            </label>
            <select onChange={(e) => setSelection(e.target.value)} name="selection" id="selection">
                {furnitureTypes.map((option) => {
                    return (
                        <option value={option} key={option}>
                            {firstCharToUC(option)}
                        </option>
                    )
                })}
            </select>
            <button type='submit'>
                Make selection
            </button>
        </form>

        {furniture.length > 0 && <SearchResults results={furniture} />}
    </div>
  )
}

export default ScrapingForm