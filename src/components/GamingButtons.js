import React from 'react';
import '../App.css'


const GamingButtons = (props) => {

    return (
        <div className='GamingButtons'>
            <button onClick={props.feeder}>Feed</button>
            <button id='cleanButton' onClick={props.kakaCleaner}>Clean</button>
            <button>Play</button>
        </div>


    )

}


export default GamingButtons