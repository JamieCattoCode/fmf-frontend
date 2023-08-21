import React, { useState } from 'react'
import Select from 'react-select';
import { getData } from '../requests';

const ScrapingForm = () => {
  const [selection, setSelection] = useState('title');

  const handleSubmit = (event) => {
    event.preventDefault();
    getData(selection)
        .then(({ data }) => console.log(data))
        .catch(({ message }) => console.log(message));
  };

  return (
    <div>
        <form className='selection-form' onSubmit={handleSubmit}>
            <label>
                Select what you want to scrape...
            </label>
            <select onChange={(e) => setSelection(e.target.value)} name="selection" id="selection">
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="description">Description</option>
            </select>
            <button type='submit'>
                Make selection
            </button>
        </form>
    </div>
  )
}

export default ScrapingForm