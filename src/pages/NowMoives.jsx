import { useNowMovies } from "../hooks/useNowMovies";
import { MovieData } from "./MovieData";
import './NowMovies.css';


export const NowMoivespage = () => {

    const {data,hasError,isloading} = useNowMovies(); 



    if (isloading) return <p>...cargando</p>;
    if (hasError) return <p>Error al cargar los datos</p>;
    if (!data || !data.results) return <p>No hay datos disponibles</p>;
    

    return(
    <>
        <h1>Peliculas en cartelera</h1>
        <div className="cards">
            {data.results.map((movie)=>{
                return(<MovieData key={movie.id} movie={movie}/>)
            })}
        </div>
    </>)
}