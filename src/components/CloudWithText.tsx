import React from "react";
import classes from "./CloudWithText.module.css";


const CloudWithText = (props:any) => {
    return (<div className={classes.cloudWithText}>
            <p>{props.cloudWithText}</p>
        </div>
    )
}

export default CloudWithText

