import axios from 'axios';

const API_KEY = '09ad610674f1b2ae6a74ae6997f42b8e';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}, US`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}