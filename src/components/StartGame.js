import React from 'react'
import '../styles/StartGame.css'

function StartGame ({handleStartCLick}) {

    return (
    <div className="start">
        <h1 id="startTitle">Wave Match</h1>

        <p id="startIntro">Click a wave without clicking the same wave twice. Earn 1 point for every wave guessed. Score starts over at 0 for a duplicate guess!</p>

        <button id="startButton" onClick={handleStartCLick}>START GAME</button>

    </div>
    )
}

export default StartGame