import React, {useState} from "react"
import MovieGrid from "../components/MovieGrid.jsx"

function Favourites({favourites, toggleFavourite, handleMovieClick}){
    console.log(favourites)
    return(
        
        <div className="favourites-container">
            {favourites.length > 0 ?
                (<MovieGrid data={favourites} toggleFavourite={toggleFavourite}
                    favourites={favourites} handleMovieClick={handleMovieClick}
                />)
                :
                (<div>empty div</div>)
            }
        </div>
    )

}
export default Favourites