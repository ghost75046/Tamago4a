import React from 'react';
import './App.css'
import Food from "./stat/Food";
import Kaka from "./stat/Kaka";
import Delya from './Delya.png'
import GamingButtons from "./components/GamingButtons";







const App = (props) => {


    return (
        <div className='mainDiv'>


            <div className='myEgg'>

                <div className='cloudWithText'>
                    <p>{props.cloudWithText}</p>
                </div>
            <Food foodLevel={props.foodLevel} feeder={props.feeder} rerenderEntireTree={props.rerenderEntireTree}/>


                <img className='Delya' src={Delya} alt="#"/>

            <Kaka kakaLevel={props.kakaLevel} kakaCleaner={props.kakaCleaner}/>
                <img className='emotion' src={props.emotion} alt="#"/>
            <GamingButtons feeder={props.feeder} kakaCleaner={props.kakaCleaner} playing={props.playing}/>

            </div>
        </div>


    )

}


export default App