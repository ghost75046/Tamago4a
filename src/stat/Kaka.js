import React from 'react';



//перенёс в index.js
// let foodLevel = [<div className='hungryItem'><img src={shava} alt="#"/></div>]
// function feeder(){
//     foodLevel.push('<div className=\'hungryItem\'><img src={shava} alt="#"/></div>')
//     console.log(foodLevel)
// }


const Kaka = (props) => {
    return (<div>

            <div className='kakaLevel'>
                kakaLevel
                {props.kakaLevel}
            </div>
            <button onClick={props.kakaCleaner}>убрать</button>


        </div>
    )
}

export default Kaka