import React, {useState} from "react"
import {Film} from "lucide-react"
import Loader from "../components/Loader.jsx"

function MovieDetails({movieDetails, previousPhase, setPhase, loading}){
    const {Poster, Title, Year, Type, Runtime, imdbRating,
         Language, Country, Rated, Plot, Director, 
         Actors, Writer, Released, Awards } = movieDetails;

    const [imageError, setImageError] = useState(false);

    return(
        <div className="details-container">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <button className="detail-back-button"
                        onClick={() => setPhase(previousPhase)}
                    >⬅ Back to Results</button>


                    <div className="movie-details-container">
                        <div className="detail-first-div">
                            {!imageError && Poster !== "N/A" ?
                                (
                                    <img 
                                        className="movie-poster"
                                        src={Poster}
                                        alt={`${Title} poster`}
                                        onError={() => setImageError(true)}
                                    />
                                )
                                :
                                (
                                    <div className="no-poster">
                                        <Film size={42} />
                                        <span>No Poster Available</span>
                                        
                                    </div>
                                )
                            }

                            <div className="movie-info">
                                <h1>{Title}</h1>

                                <p><span>{Year}</span> 
                                    <span> • {Type ? Type.charAt(0).toUpperCase() + Type.slice(1) : ""}</span>
                                    {Runtime !== "N/A" &&
                                        <span> • {Runtime}</span>}
                                </p>

                                {imdbRating !== "N/A" &&
                                    <p>Rating: <span className="rating">{imdbRating}/10</span></p>}

                                
                                {Language !== "N/A" && Country !== "N/A" &&
                                    <p>
                                        <span>{Language}</span> 
                                        <span> • {Country}</span>
                                    </p>
                                }
                                
                                <p>Rated: {Rated !== "N/A" ? Rated : "Not Available"}</p>

                            </div>
                        </div>

                        
                        {Plot !== "N/A" &&
                            <div className="detail-second-div">
                                <p>{Plot}</p>
                            </div>
                        }

                        <div className="detail-third-div">
                            <p>Director: {Director !== "N/A" ? Director : "Not Available"}</p>

                            <p>Cast: {Actors !== "N/A" ? Actors : "Not Available"}</p>

                            <p>Writer: {Writer !== "N/A" ? Writer : "Not Available"}</p>

                            <p>Released: {Released !== "N/A" ? Released : "Not Available"}</p>

                            <p>Awards: {Awards !== "N/A" ? Awards : "Not Available"}</p>
                        </div>
                        
                    </div>
                </>
                )
            }    
        </div>
    )
}
export default MovieDetails