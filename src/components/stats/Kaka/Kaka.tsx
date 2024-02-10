import React from 'react';
import './Kaka.css'
import kakaLevelStore from "../../../store/kakaLevelStore";
import {observer} from "mobx-react-lite";

//перенёс в index.ts
// let foodLevel = [<div className='hungryItem'><img src={shava} alt="#"/></div>]
// function feeder(){
//     foodLevel.push('<div className=\'hungryItem\'><img src={shava} alt="#"/></div>')
//     console.log(foodLevel)
// }


const Kaka = () => {
    return (<div>
            <div className='kakaLevel'>
                {kakaLevelStore.kakaLevel}
            </div>
            {/*<button onClick={props.kakaCleaner}>убрать</button>*/}
        </div>
    )
}

export default observer(Kaka)