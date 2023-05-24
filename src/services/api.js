import axios from "axios";

export const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'a99fdb42e6bd53b96c907a5002741609',
    'x-rapidapi-host': 'v3.football.api-sports.io'
  },
  
});