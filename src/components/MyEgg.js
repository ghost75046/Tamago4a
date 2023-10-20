import Food from "./stats/Food/Food";
import Delya from "../images/Delya.png";
import Kaka from "./stats/Kaka/Kaka";
import GamingButtons from "./GamingButtons";
import React from "react";
import classes from "./MyEgg.module.css";
import CloudWithText from "./CloudWithText";



const MyEgg = (props) => {
    return (<div className={classes.myEgg}>


            <Food foodLevel={props.foodLevel} feeder={props.feeder} rerenderEntireTree={props.rerenderEntireTree}/>


            <img className='Delya' src={Delya} alt="#"/>

            <Kaka kakaLevel={props.kakaLevel} kakaCleaner={props.kakaCleaner}/>
            <img className='emotion' src={props.emotion} alt="#"/>
            <GamingButtons feeder={props.feeder} kakaCleaner={props.kakaCleaner} playing={props.playing}/>

        </div>
    )
}

export default MyEgg


