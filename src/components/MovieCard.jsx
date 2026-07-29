import {useState} from "react"
import {Heart, Film} from "lucide-react"

function MovieCard({movie, toggleFavourite, favourites, handleMovieClick}){
    const [imageError, setImageError] = useState(false);

    const isFavourite = favourites.some(
        (fav) => fav.imdbID === movie.imdbID
    )

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
            {!imageError && movie.Poster !== "N/A" ? 
                <img className="card-poster"
                src={movie.Poster} 
                alt={`${movie.Title} poster`}
                onError={() => setImageError(true)} 
                /> 
                : 
                <div className="no-poster">
                    <Film size={42}/>
                    <span>No Poster Available</span>
                </div>
            }
            
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
                    <Heart 
                        className="favourite-icon"
                        fill={isFavourite ? "var(--favorite)": "none"}
                        color={isFavourite ? "var(--favorite)": "var(--btn-secondary-text)"}
                    />
                </button>
                
            </div>
        </div>
    )
    
}
export default MovieCard