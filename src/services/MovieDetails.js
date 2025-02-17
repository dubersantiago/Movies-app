const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const MovieDetail = (id)=>{
    const res = fetch(`${BASE_URL}${id}?language=es-ES&api_key=${API_KEY}`);
}