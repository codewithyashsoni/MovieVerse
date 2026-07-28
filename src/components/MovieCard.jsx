import {Heart} from "lucide-react"

function MovieCard({movie}){
    const type= movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1);

    return(
        <div 
        className="movie-card"
        role="button"
        tabIndex={0}
        onClick={() => handleMovieClick(movie.imdbID)}
        onKeyDown={(e) => {
            if(e.key === "Enter" || e.key === " "){
                handleMovieClick(movie.imdbID);
            }
        }}
        >
            <img className="card-poster" src={movie.Poster} alt={`${movie.Title} poster`} />

            <h3 className="card-title">{movie.Title}</h3>

            <div className="card-inner-container">
                <div className="card-type-year-container">
                    <p className="card-type">{type}</p>

                    <p className="card-year">{movie.Year.slice(0,4)}</p>
                </div>

                <button
                    className="favourite-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleFavourite(movie);
                    }}
                >
                    <Heart className="favourite-icon" />
                </button>
                
            </div>
        </div>
    )
    
}
export default MovieCard