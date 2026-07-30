import React, {useState} from "react"
import {Clapperboard} from "lucide-react"

function NavBar({setPhase}){
    return(
        <div className="navbar-wrapper">
            <nav className="navbar">
                <div className="logo">
                    <Clapperboard className="logo-icon" />
                    <span>MovieVerse</span>
                </div>

                <ul className="nav-list">
                    <li className="nav-list-item">
                        <button 
                        className="nav-button"
                        onClick={() => setPhase("home")}
                        >Home</button>
                    </li>
                    <li className="nav-list-item">
                        <button 
                        className="nav-button"
                        onClick={() => setPhase("favourite")}
                        >Favourites</button>
                    </li>
                </ul>
            </nav>
        </div>    
    )
}
export default NavBar