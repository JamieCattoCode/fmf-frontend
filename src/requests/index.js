import axios from 'axios';

import { convertObjectToQueryString, convertIndexedListToObjectList } from '../helpers';

const BASE_URL = 'http://127.0.0.1:8000/api';

export async function getFurnitureTypes() {
    const { data } = await axios.get(`${BASE_URL}/furniture/types`);
    return data;
}

export async function getFurniture(queries) {
    const queryString = convertObjectToQueryString(queries);
    const { data } = await axios.get(`${BASE_URL}/furniture${queryString}`,);
    console.log(convertIndexedListToObjectList(data.furniture));
    return convertIndexedListToObjectList(data.furniture);
}

export async function getItemsByType(type) {
    const { data } = await axios.get(`${BASE_URL}/furniture/${type}`,);
    return data;
}