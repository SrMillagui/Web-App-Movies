/*import { MoviesGrid } from "./MoviesGrid";*/
import styles from "./css/Aplicacion.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { LandingPage } from "./LandingPage";
import Search from "./Search";
import { FaUserAstronaut } from "react-icons/fa";
import React, { useState } from 'react';

export function Aplicacion() {

  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(true);
  }


  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.titulo}>MoviesDud</h1>
        </Link>
        <Search/>

        <div className={styles.luzUno}>MoviesDud</div>

        <nav>
          <Link to="/">Home</Link>

          <Link to="movies">Top</Link>
          <Link to="movies">Releases</Link>
          <Link to="movies">Action</Link>
          <Link to="movies">Animation</Link>
          <Link to="movies">War</Link>
          <Link to="movies">Adventure</Link>

          <Link to="movies">
            <FaUserAstronaut
              size={20}
              Link
              to="movies"
              className={styles.login}
            />
          </Link>

          <Link to="movies">Login</Link>
        </nav>

        <button onClick={handleClick}>
          <div className={styles.linea}></div>
          <div className={styles.linea}></div>
          <div className={styles.linea}></div>
        </button>
      </header>

      {visible ? (
  <div className={styles.bob}>
    <Link to="movies" className={styles.bob}>
      {" "}
      Home{" "}
    </Link>
    <Link to="movies" className={styles.bob}>
      {" "}
      Top{" "}
    </Link>
    <Link to="movies" className={styles.bob}>
      {" "}
      Releases{" "}
    </Link>
    <Link to="movies" className={styles.bob}>
      {" "}
      Action{" "}
    </Link>
    <Link to="movies" className={styles.bob}>
      {" "}
      Animation{" "}
    </Link>
    <Link to="movies" className={styles.bob}>
      {" "}
      War{" "}
    </Link>
  </div>
) : null}
     
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}
