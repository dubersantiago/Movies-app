const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/search/movie?include_adult=true&language=es-ES&page=1";

export const searchMovie= async (query)=>{
    const res = await fetch(`${BASE_URL}&apikey=${API_KEY}&query=${query}`);
    const data = await res.json();
    return data;
}