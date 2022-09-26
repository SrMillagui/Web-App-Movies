import styles from "./css/MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/HttpClient";
import Spinner from "./Spinner";
import { useQuery } from "../hooks/UseQuery";


export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data)
      setIsLoading(false);
      });
  }, [movieId]);

if (isLoading){
  return <Spinner/>
}

  
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className={styles.detailsConteiner}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstText}>
          <strong> Title:</strong> {movie.title}
        </p>
        <p>
          <strong> Genres:</strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description: </strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
