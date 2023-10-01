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

            <div className='hungryLevel'>
                {props.foodLevel}
            </div>
            {/*<button onClick={props.feeder}>Покормить</button>*/}


        </div>
    )
}

export default Food