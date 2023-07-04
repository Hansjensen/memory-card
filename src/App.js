
import './App.css';
import "@fontsource/open-sans/500.css";
import React, {useState} from 'react';
import BuildCardGrid from './components/Card';
import Header from './components/Header';
import teahupoo from "../src/images/teahupoo.jpeg"
import desertpoint from "../src/images/desertpoint.jpeg"
import gland from "../src/images/gland.jpeg"
import hts from "../src/images/hts.jpeg"
import jbay from "../src/images/jbay.jpeg"
import kandui from "../src/images/kandui.jpeg"
import lowertrestles from "../src/images/lowertrestles.jpeg"
import macaronis from "../src/images/macaronis.jpeg"
import mavericks from "../src/images/mavericks.jpeg"
import pipeline from "../src/images/pipeline.jpeg"
import skeletonbay from "../src/images/skeletonbay.jpeg"
import waimeabay from "../src/images/waimeabay.jpeg"





function App() {
  const [waves, setWaves] = useState([
    {  
        id: 1,
        title: "Teahupoo",
        img: teahupoo,
        selected: false
    }, {  
        id:2,
        title: "Desert Point",
        img: desertpoint,
        selected: false
    } , {  
        id: 3,
        title: "G-Land",
        img: gland,
        selected: false
    }, {  
        id: 4,
        title: "HT's",
        img: hts,
        selected: false
    }, {  
        id: 5,
        title: "J-Bay",
        img: jbay,
        selected: false
    }, {  
        id: 6,
        title: "Kandui",
        img: kandui,
        selected: false
    }, {  
        id: 7,
        title: "Lower Trestles",
        img: lowertrestles,
        selected: false
    }, {  
        id: 8,
        title: "Macaronis",
        img: macaronis,
        selected: false
    }, {  
        id: 9,
        title: "Mavericks",
        img: mavericks,
        selected: false
    }, { 
        id: 10, 
        title: "Pipeline",
        img: pipeline,
        selected: false
    }, {  
        id: 11,
        title: "Skeleton Bay",
        img: skeletonbay,
        selected: false
    }, {  
        id: 12,
        title: "Waimea Bay",
        img: waimeabay,
        selected: false
    }
  ])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  
  const handleCardClick = (e) => {


    let newArray = waves.map(x => {
          if(x.title === e.currentTarget.id) {
            return Object.assign({}, x, {selected: true})
          }
          return x    
    })
    
    setWaves(newArray)
    setScore((score) => score + 1)
    if (score > highScore) {
      setHighScore(score)
    }
  }


  return (
    <div>
    <Header score={score} highScore={highScore}/>
    <div className='gridWrapper'>
    <BuildCardGrid waves={waves} handleCardClick={handleCardClick}/>
      </div>
  </div>
  )
  
}

export default App;
