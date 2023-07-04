import React from "react";
import "../styles/Header.css"


const Header = ({score, highScore}) => {
    return (
        <div id="header">
         <div className="score current">
         <h1>Score:       <span>{score}</span></h1>
         </div>
         <h1 className="ok">Wave Match</h1>
         <div className="score high">
            <h1>High Score:             <span>{highScore}</span></h1>
            
         </div>
       </div>
    )
}

export default Header;