import { UseFetch } from "./useFetch";

const API_KEY = `5cc317cf5a286aa4192a79866a11968d`;
const BASE_URL = "https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1";

export const useNowMovies = ()=>{
    const url = `${BASE_URL}&api_key=${API_KEY}`;  
    const {data,hasError,isloading} = UseFetch(url);
    
    return ({
        data,
        hasError,
        isloading
    });
}