/*import { MoviesGrid } from "./MoviesGrid";*/
import styles from "./css/Aplicacion.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { LandingPage } from "./LandingPage";

export function Aplicacion() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.titulo}>Movies</h1>
        </Link>
        <Link to="/">Home</Link>
        <br />
        <Link to="movie">Movie</Link>
      </header>
      <main>
        <Routes>
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}
