import React, {useState} from "react"
import SearchBar from "../components/SearchBar.jsx"
import FilterSortBar from "../components/FilterSortBar.jsx"

function Home({setQuery, data}){
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState("newest first")
    return(
        <div className="home-container">
            <SearchBar setQuery={setQuery} />
            <FilterSortBar setFilter={setFilter} setSort={setSort} />
        </div>
    )
}
export default Home