import React, { useState, useEffect } from 'react';
import { InputAdornment, TextField, Button, Select, MenuItem } from '@mui/material';

import { getFurnitureTypes, getFurniture } from '../../requests';
import { formatOptions, firstCharToUC } from '../../helpers';

const FurnitureSearchForm = ({ setSearchResults }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [depth, setDepth] = useState(null);
  const [selectedType, setSelectedType] = useState("all");

  const [furnitureTypes, setFurnitureTypes] = useState([]);

  const changeHeight = (e) => setHeight(e.target.value);
  const changeWidth = (e) => setWidth(e.target.value);
  const changeDepth = (e) => setDepth(e.target.value);
  const changeFurnitureType = (e) => setSelectedType(e.target.value);

  useEffect(() => {
    getFurnitureTypes()
        .then(({ furniture_types }) => {
            setFurnitureTypes(furniture_types);
        })
        .catch(({ message }) => console.log(message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(height, width, depth);
    getFurniture({
        height,
        width,
        depth,
        type: selectedType
    })
        .then((furnitureData) => {
            setSearchResults(furnitureData);
        })
        .catch(({ message }) => console.log(message));
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <TextField
               label="Height"
               id="height-textfield"
               InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment> }}
               name="height"
               value={height}
               onChange={changeHeight}
            />
            <TextField
               label="Width"
               id="width-textfield"
               InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment> }}
               name="width"
               value={width}
               onChange={changeWidth}

            />
            <TextField
               label="Depth"
               id="depth-textfield"
               InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment> }}
               name="depth"
               value={depth}
               onChange={changeDepth}
            />
            {furnitureTypes && 
              (<Select onChange={changeFurnitureType} value={furnitureTypes[0]}>
                <MenuItem value="all">All</MenuItem>
                {furnitureTypes.map((furnitureType) => {
                return (<MenuItem key={furnitureType} value={furnitureType}>{firstCharToUC(furnitureType)}</MenuItem>)
              })}
            </Select>)}

            <Button variant="contained" type="submit">
                Search
            </Button>
        </form>
    </div>
  );
}

export default FurnitureSearchForm;