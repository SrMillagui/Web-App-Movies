/*import React, { useEffect, useState } from "react";*/
import { FaSearch } from "react-icons/fa";
import styles from "./css/Search.module.css";
/*import { useSearchParams } from "react-router-dom";*/
import { useSearchParams } from "react-router-dom";
//import { useHistory } from "react-router";
//import { useQuery } from "../hooks/useQuery";

export default function Search() {
  const [query, setQuery] = useSearchParams();
  /*const [query, setQuery] = useSearchParams();*/
  const search = query.get("search");


//const value = useSearchParams;

  const handleSubmit = (e) => {
    e.preventDefault();

   // setQuery({ search: value });
    // navigate("/?search=" + value);
  };

  return (
    <form className={styles.searchConteiner} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search ?? ""}
          autoFocus
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;

            setQuery({search: value})
            //navigate("/?search=" + value)
          }}
        />
        <button className={styles.searchButton} type="submit">
          
        </button>
      </div>
    </form>
  );
}
