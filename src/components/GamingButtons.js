import React from 'react';
import '../App.css'
import {playing} from "../redux/state";


const GamingButtons = (props) => {

    return (
        <div className='GamingButtons'>
            <button onClick={props.feeder}>Feed</button>
            <button id='cleanButton' onClick={props.kakaCleaner}>Clean</button>
            <button onClick={props.playing}>Play</button>
        </div>


    )

}


export default GamingButtons