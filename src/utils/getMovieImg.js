import placeHolder from "./placeholdermovie.jpeg";

export function GetMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeHolder;
}
