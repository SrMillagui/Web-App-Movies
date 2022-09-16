import { MovieCard } from "./MovieCard";
/*import movies from "./movies.json";*/
import styles from "./css/MoviesGrid.module.css";
import { useEffect, useState } from "react";
/*import { useParams } from "react-router-dom";*/
import { get } from "../utils/HttpClient";

export function MoviesGrid() {
  /*let movies = [];*/
  const [movies, setMovies] = useState([]);
  /*const movies = moviesState([0]);
  const setMovies = moviesState([1])*/

  useEffect(() => {
      get("/discover/movie")
        .then((data) => {
        setMovies(data.results);
      })
      }, []);
 
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key="{movie.id}" movie={movie} />
      ))}
    </ul>
  );
}
