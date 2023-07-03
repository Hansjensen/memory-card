import React, {useState} from 'react'
import '../styles/Card.css'
import teahupoo from "../images/teahupoo.jpeg"
import desertpoint from "../images/desertpoint.jpeg"
import gland from "../images/gland.jpeg"
import hts from "../images/hts.jpeg"
import jbay from "../images/jbay.jpeg"
import kandui from "../images/kandui.jpeg"
import lowertrestles from "../images/lowertrestles.jpeg"
import macaronis from "../images/macaronis.jpeg"
import mavericks from "../images/mavericks.jpeg"
import pipeline from "../images/pipeline.jpeg"
import skeletonbay from "../images/skeletonbay.jpeg"
import waimeabay from "../images/waimeabay.jpeg"
import "@fontsource/open-sans/500.css";


const waves = [
    {  
        title: "Teahupoo",
        img: teahupoo,
        selected: false
    }, {  
        title: "Desert Point",
        img: desertpoint,
        selected: false
    } , {  
        title: "G-Land",
        img: gland,
        selected: false
    }, {  
        title: "HT's",
        img: hts,
        selected: false
    }, {  
        title: "J-Bay",
        img: jbay,
        selected: false
    }, {  
        title: "Kandui",
        img: kandui,
        selected: false
    }, {  
        title: "Lower Trestles",
        img: lowertrestles,
        selected: false
    }, {  
        title: "Macaronis",
        img: macaronis,
        selected: false
    }, {  
        title: "Mavericks",
        img: mavericks,
        selected: false
    }, {  
        title: "Pipeline",
        img: pipeline,
        selected: false
    }, {  
        title: "Skeleton Bay",
        img: skeletonbay,
        selected: false
    }, {  
        title: "Waimea Bay",
        img: waimeabay,
        selected: false
    }
]


function Card(props) {

    return (
        <div className="card">
            <div className="imageDiv">
                <img
                src={props.img}
                alt={props.title}
                className="image"
                    />
            </div>
            <div>
                <h2 className="cardTitle">{props.title}</h2>
            </div>
        </div>
    )
}

export default Card