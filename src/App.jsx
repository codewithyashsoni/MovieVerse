import { useState } from 'react'
import Home from "./pages/Home.jsx"
import NavBar from "./components/NavBar.jsx"

function App() {
  const [phase, setPhase] = useState("home");
  const [query, setQuery] = useState("");

  return (
    <>
    <NavBar setPhase={setPhase} />

    <div className="container">
      {phase === "home" && <Home setQuery={setQuery}/>}
    </div></>
    
  )
}

export default App
