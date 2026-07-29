import { useState, useEffect } from 'react'
import NavBar from "./components/NavBar.jsx"
import Home from "./pages/Home.jsx"
import Favourites from "./pages/Favourites.jsx"
import MovieDetails from "./pages/MovieDetails.jsx"


function App() {
  const [phase, setPhase] = useState("home");
  const [previousPhase, setPreviousPhase] = useState("home");
  const [query, setQuery] = useState("");
  const [data, setData] = useState("")
  const [loading, setLoading]= useState(false);
  const [error, setError] = useState("");
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");
    if(savedFavourites){
      return JSON.parse(savedFavourites);
    }
    return [];
  });
  const [movieDetails, setMovieDetails] = useState("");

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    if(!query.trim()) return;

    fetchData(query);
  }, [query]);

  useEffect(() => {
      localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites])

  async function fetchData(name){
    setLoading(true);
    setError("")
    try{
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`);
      const data = await response.json();
      if(data.Response === "False"){
        setError(data.Error);
        setData(null);
        return;
      }
      console.log(data);
      setError("");
      setData(data);
      setQuery("");
    }catch(error){
      console.error(error);
      setError("Something went wrong. Please try again.")
    }finally{
      setLoading(false);
    }
  }

  function toggleFavourite(movie){
    const exists = favourites.some(fav => fav.imdbID === movie.imdbID);
    if(exists){
      setFavourites(f => f.filter((currMovie) => currMovie.imdbID !== movie.imdbID))
    }else{
      setFavourites(f => [...f, movie]);
    }
  }

  function handleMovieClick(movieID){
    setPreviousPhase(phase);
    setPhase("movie-details");
    fetchMovieDetails(movieID);
  }

  async function fetchMovieDetails(movieID){
    setLoading(true);
    setError("")
    try{
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}`);
      const detailData = await response.json();
      if(detailData.Response === "False"){
        setError(detailData.Error);
        setMovieDetails(null);
        return;
      }
      console.log("detail data", detailData);
      setMovieDetails(detailData);
      
    }catch(error){
      console.error(error.message);
      setError("Can't find extra details about this movie")
    }finally{
      setLoading(false);
    }
  }

  return (
    <>
    <NavBar setPhase={setPhase} />

    <div className="container">
      {phase === "home" && 
        <Home setQuery={setQuery} data={data} toggleFavourite={toggleFavourite} 
          favourites={favourites} handleMovieClick={handleMovieClick}
          loading={loading} error={error}
        />
      }
      {phase === "favourite" &&
        <Favourites favourites={favourites} toggleFavourite={toggleFavourite}
         handleMovieClick={handleMovieClick} />
      }
      {phase === "movie-details" &&
        <MovieDetails movieDetails={movieDetails} previousPhase={previousPhase} 
        setPhase={setPhase} loading={loading}/>
      }
    </div></>
    
  )
}

export default App
