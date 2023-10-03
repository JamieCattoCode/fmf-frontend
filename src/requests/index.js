import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export async function getFurnitureTypes() {
    const { data } = await axios.get(`${BASE_URL}/furniture/types`);
    return data;
}

export async function getItemsByType(type) {
    const { data } = await axios.get(`${BASE_URL}/furniture/${type}`,);
    return data;
}