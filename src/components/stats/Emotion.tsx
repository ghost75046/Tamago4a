import React from "react";
import './Emotion.css'





const Pet = (props:any) => {
    return (<div>
            <img className='emotion' src={props.emotion} alt="#"/>
        </div>
    )
}

export default Pet

