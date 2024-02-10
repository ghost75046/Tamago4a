import React from 'react';
import  './Food.css'
//import shava from "../../../images/shaverma.png";
//import HungryItem from "./HungryItem";
import foodLevelStore from "../../../store/foodLevelStore";
import {observer} from "mobx-react-lite";




const Food = () => {
    return (
        <div>
            <div className='hungryLevel' >
                {/*{props.foodLevel}*/}
                {/*<HungryItem shavaImg={shava} />*/}
                {foodLevelStore.foodLevel}

            </div>
        </div>
    )
}

export default observer(Food)