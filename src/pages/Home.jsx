import SearchBar from "../components/SearchBar.jsx"

function Home({setQuery}){
    return(
        <div className="home-container">
            <SearchBar setQuery={setQuery} />
        </div>
    )
}
export default Home