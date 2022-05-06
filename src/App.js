import React from "react";
import { useEffect, useState } from "react";
import SearchIcon from './search.svg';
import MovieCards from "./MovieCards";

//http://www.omdbapi.com/?i=tt3896198&apikey=f804fd8b mi apikey

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f804fd8b'

const movie1 = {
  Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  Title: "Italian Spiderman",
  Type: "movie",
  Year: "2007",
  imdbID: "tt2705436"
}

function App() {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm ] = useState('');


  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovie('Spiderman')
  },[])
 

  return (
    <div className="app">
     <h1>Cuevana Acuenta</h1>
     <div className="search">
        <input placeholder="Search for Movies"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
     </div>
      {
        movies?.length > 0
        ?
        ( 
        <div className="container">
          {movies.map((movie) => (
            <MovieCards movie={movie} />
          ))}
        </div>
        ) :
        (
          <div className="empty">
              <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
