import MovieGrid from "../components/MovieGrid.jsx"
import EmptyState from "../components/EmptyState.jsx"
import {HeartOff} from "lucide-react"

function Favourites({favourites, toggleFavourite, handleMovieClick}){
    console.log(favourites)
    return(
        
        <div className="favourites-container">
            {favourites.length > 0 ?
                (<MovieGrid data={favourites} toggleFavourite={toggleFavourite}
                    favourites={favourites} handleMovieClick={handleMovieClick}
                />)
                :
                (
                    <EmptyState
                        icon={HeartOff}
                        title="No favourites yet"
                        message="Add movies to your favourites by clicking the heart icon"
                    />
                )
            }
        </div>
    )

}
export default Favourites