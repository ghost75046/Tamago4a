import React from 'react';
import '../App.css'
import classes from './GamingButtons.module.css'



const GamingButtons = (props:any) => {

    return (
        <div className={classes.GamingButtons}>
            <button onClick={props.feeder}>Feed</button>
            <button id={classes.cleanButton} onClick={props.kakaCleaner}>Clean</button>
            <button onClick={props.playing}>Play</button>
        </div>


    )

}


export default GamingButtons