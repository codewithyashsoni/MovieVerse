import React, {useState} from "react"
import SearchBar from "../components/SearchBar.jsx"
import FilterSortBar from "../components/FilterSortBar.jsx"
import MovieGrid from "../components/MovieGrid.jsx"
import Loader from "../components/Loader.jsx"
import EmptyState from "../components/EmptyState.jsx"
import {Film, SearchX} from "lucide-react"

function Home({setQuery, data, toggleFavourite, favourites, handleMovieClick, loading, error}){
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState("newest first");

    let sortedData = [];

    function getYear(movie){
        return parseInt(movie.Year);
    }

    if(data){
        let filteredData = data?.Search?.filter((item) => {
        if(filter === "all"){
            return true 
        }else{
            return item.Type === filter;
        }
        }) ?? [];

        sortedData = [...filteredData].sort((a,b) => {
            if(sort === "newest first"){
                return getYear(b) - getYear(a);
            }else if(sort === "oldest first"){
                return getYear(a) - getYear(b);
            }else if(sort === "a-z"){
                return a.Title.localeCompare(b.Title);
            }else if(sort === "z-a"){
                return b.Title.localeCompare(a.Title);
            }
            return 0;

        })

    }
    
    return(
        <div className="home-container">
            <SearchBar setQuery={setQuery} />
            <FilterSortBar setFilter={setFilter} setSort={setSort} />
            {loading ? (
                <Loader />
            ) : error ? (
                <EmptyState
                    icon={SearchX}
                    title="No Results Found"
                    message={error}
                />
            ) : (
                data ? (
                    <MovieGrid data={sortedData} toggleFavourite={toggleFavourite}
                        favourites={favourites} handleMovieClick={handleMovieClick}
                    />
                ) : (
                    <EmptyState
                        icon={Film}
                        title="Search for Movies & Shows"
                        message='Try "Inception" , "Breaking Bad" , "Dune"'
                    />
                )
                
            )} 
        </div>
    )
}
export default Home