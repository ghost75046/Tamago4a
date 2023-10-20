import React from "react";
import classes from './Emotion.module.css'





const Pet = (props) => {
    return (<div>
            <img className={classes.emotion} src={props.emotion} alt="#"/>
        </div>
    )
}

export default Pet

