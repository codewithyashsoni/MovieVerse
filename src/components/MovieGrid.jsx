import MovieCard from "./MovieCard.jsx"

function MovieGrid({data}){
    return(
        <div className="movie-grid-container">
            {data.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
        
    )
}
export default MovieGrid