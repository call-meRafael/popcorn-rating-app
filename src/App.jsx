import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./data";
import { NavBar } from "./components/navBar";
import { MainContent } from "./components/mainContent";



const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const  App = ( ) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <NavBar movies={movies} query={query} setQuery={setQuery} />

      <MainContent movies={movies} isOpen1={isOpen1} isOpen2={isOpen2} watched={watched} setIsOpen1={setIsOpen1} setIsOpen2={setIsOpen2} avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} avgRuntime={avgRuntime} />
    </>
  );
}
