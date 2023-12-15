import React from 'react';
import classes from './Kaka.module.css'


//перенёс в index.ts
// let foodLevel = [<div className='hungryItem'><img src={shava} alt="#"/></div>]
// function feeder(){
//     foodLevel.push('<div className=\'hungryItem\'><img src={shava} alt="#"/></div>')
//     console.log(foodLevel)
// }


const Kaka = (props:any) => {
    return (<div>
            <div className={classes.kakaLevel}>
                {props.kakaLevel}
            </div>
            {/*<button onClick={props.kakaCleaner}>убрать</button>*/}
        </div>
    )
}

export default Kaka