import React from 'react';
import classes from './Food.module.css'




const Food = (props) => {
    return (
        <div>
            <div className={classes.hungryLevel} >
                {props.foodLevel}
            </div>
        </div>
    )
}

export default Food