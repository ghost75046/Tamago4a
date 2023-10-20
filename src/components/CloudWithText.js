import React from "react";
import classes from "./CloudWithText.module.css";


const CloudWithText = (props) => {
    return (<div className={classes.cloudWithText}>
            <p>{props.cloudWithText}</p>
        </div>
    )
}

export default CloudWithText

