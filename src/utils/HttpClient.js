const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNWE1NmNiODc3MGFlOTlkNDU2YjA0YzE3NDg3N2Q2YiIsInN1YiI6IjYzMjM5N2ZkMGI3MzE2MDA3ZGYwNjljNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cCEWg74zsJqgJWAndwlYSV3anIN_yq7jfavKlmgx9eA",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
