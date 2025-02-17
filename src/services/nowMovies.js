const API_KEY = `5cc317cf5a286aa4192a79866a11968d`;
const BASE_URL = "https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1";

export const nowMovies= async ()=>{
    const res = await fetch(`${BASE_URL}&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}