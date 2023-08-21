import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export async function getData(selection) {
    const { data } = await axios.get(`${BASE_URL}/scrape`, {params: {selection}});
    return data;
}