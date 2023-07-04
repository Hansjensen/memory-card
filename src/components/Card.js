import React from 'react'
import '../styles/Card.css'
import { arrayShuffle } from './utils'





const BuildCardGrid = ({waves, handleCardClick}) => {

    let wavesShuffle = arrayShuffle(waves)

    const waveGrid = wavesShuffle.map((wave) => (
        <Card waves={wave} handleCardClick={handleCardClick}/>
    ))

   return <div id="waveGrid">{waveGrid}</div>

            
    
    }

const Card = ({waves, handleCardClick}) => {

    return (
        <div className="card" onClick={handleCardClick}>
            <div className="imageDiv">
                <img
                src={waves.img}
                alt={waves.title}
                className="image"
                    />
            </div>
            <div>
                <h2 className="cardTitle">{waves.title}</h2>
            </div>
        </div>
    )
}

export default BuildCardGrid