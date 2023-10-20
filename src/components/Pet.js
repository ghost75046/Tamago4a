import React from "react";
import classes from "./Pet.module.css";





const Pet = (props) => {
    return (<div>
            <img className={classes.Pet} src={props.Delya} alt="#"/>
        </div>
    )
}

export default Pet

