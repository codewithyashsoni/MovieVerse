import { useState, useEffect } from 'react'
import NavBar from "./components/NavBar.jsx"
import Home from "./pages/Home.jsx"
import Favourites from "./pages/Favourites.jsx"
import MovieDetails from "./pages/MovieDetails.jsx"


function App() {
  const [phase, setPhase] = useState("home");
  const [previousPhase, setPreviousPhase] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState("")
  const [loading, setLoading]= useState(false);
  const [error, setError] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [movieDetails, setMovieDetails] = useState("");

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    if(!query.trim()) return;

    fetchData(query);
  }, [query]);

  async function fetchData(name){
    setLoading(true);
    try{
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`);
      const data = await response.json();
      if(!response.ok){
        throw new Error(
          data.message ?
          data.message.charAt(0).toUpperCase() + data.message.slice(1) :
          "No Movies found" 
        )
      }
      console.log(data);
      setData(data);
      setQuery("");
    }catch(error){
      console.error(error.message);
      setError("No such movies or shows found")
    }finally{
      setLoading(false);
    }
  }

  function toggleFavourite(movie){
    if(favourites.includes(movie)){
      setFavourites(f => f.filter((currMovie) => currMovie !== movie))
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
    try{
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}`);
      const detailData = await response.json();
      if(!response.ok){
        throw new Error(
          detailData.message ?
          detailData.message.charAt(0).toUpperCase() + detailData.message.slice(1) :
          "Can't fetch extra detail about the movie" 
        )
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
          loading={loading}
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
