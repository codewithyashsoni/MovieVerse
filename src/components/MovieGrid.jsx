import MovieCard from "./MovieCard.jsx"

function MovieGrid({data, toggleFavourite, favourites, handleMovieClick}){
    return(
        <div className="movie-grid-container">
            {data.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} toggleFavourite={toggleFavourite}
                    favourites={favourites} handleMovieClick={handleMovieClick}
                />
            ))}
        </div>
    )
}
export default MovieGrid