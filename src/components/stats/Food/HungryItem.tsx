
import React from "react";
import classes from './HungryItem.module.css'




const HungryItem = (props:any) => {
    return (
        <div className={classes.hungryItem}>
            <img src={props.shavaImg} alt="#"/>
        </div>
    )
}

export default HungryItem