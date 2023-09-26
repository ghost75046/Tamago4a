import React from 'react';
import shava from "../shaverma.png";


//перенёс в index.js
// let foodLevel = [<div className='hungryItem'><img src={shava} alt="#"/></div>]
// function feeder(){
//     foodLevel.push('<div className=\'hungryItem\'><img src={shava} alt="#"/></div>')
//     console.log(foodLevel)
// }


const Food = (props) => {
    return (<div>
            комната
            <div className='hungryLevel'>
                {props.foodLevel}
            </div>
            <button onClick={() => {alert('test')}}>3</button>

        </div>
    )
}

export default Food