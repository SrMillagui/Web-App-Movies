import Spinner from "./Spinner";
import { MovieCard } from "./MovieCard";
import styles from "./css/MoviesGrid.module.css";
import { useEffect, useState } from "react";
/*import { useParams } from "react-router-dom";*/
import { GetUrl } from "../utils/HttpClient";
/*import { useQuery } from "../hooks/UseQuery";*/
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function MoviesGrid({ search }) {
  /*let movies = [];*/
  const [movies, setMovies] = useState([]);
  /*const movies = moviesState([0]);
  const setMovies = moviesState([1])*/
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const searchUrl = search
      ? "search/movie?query" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    GetUrl(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));

      setHasmore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
