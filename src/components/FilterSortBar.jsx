import {useState} from "react"

function FilterSortBar({setFilter, setSort}){
    return(
        <div className="filter-sort-container">
            <div className="filter-container">
                <p className="filter-sort-title">Type:</p>

                <select 
                className="select-container"
                onChange={(e) => setFilter(e.target.value)}
                >

                    <option 
                    value="all"
                    className="filter-sort-option"
                    >All</option>
                    <option 
                    value="movie"
                    className="filter-sort-option"
                    >Movie</option>
                    <option 
                    value="series"
                    className="filter-sort-option"
                    >Series</option>
                    <option 
                    value="episode"
                    className="filter-sort-option"
                    >Episode</option>

                </select>
            </div>

            <div className="sort-container">
                <p className="filter-sort-title">Sort:</p>

                <select 
                className="select-container"
                onChange={(e) => setSort(e.target.value)}
                >

                    <option 
                    value="newest first"
                    className="filter-sort-option"
                    >Newest first</option>
                    <option 
                    value="oldest first"
                    className="filter-sort-option"
                    >Oldest first</option>
                    <option 
                    value="a-z"
                    className="filter-sort-option"
                    >A → Z</option>
                    <option 
                    value="z-a"
                    className="filter-sort-option"
                    >Z → A</option>

                </select>
            </div>
        </div>
    )

}
export default FilterSortBar