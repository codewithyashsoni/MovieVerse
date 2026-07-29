import React, {useState, useEffect} from "react"

function SearchBar({setQuery}){
    const [input, setInput] = useState("");

    useEffect(() => {
        if(input.trim().length < 3) return;
        const timeoutID = setTimeout(() => {
            sendQuery(input)
        }, 500)

        return () => clearTimeout(timeoutID);
    }, [input])

    function handleSubmit(e){
        e.preventDefault();
        sendQuery(input);
    }

    function sendQuery(i){
        if(!i.trim()) return;
        setQuery(i);
        setInput("");
    }

    return(
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search any movie,show..."
                />

                <button 
                    className="search-button"
                    type="submit"
                >Search</button>
            </form>
        </div>
    )
}
export default SearchBar