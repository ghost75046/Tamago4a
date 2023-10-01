import React from 'react';
import './App.css'
//import feeder from './stat/Food'

import crispsCrunch from './crispsCrunch.mp3'
import Food from "./stat/Food";
import state from "./redux/state";
import day from './day.jpg'
import night from './night.jpg'
import Kaka from "./stat/Kaka";
import Delya from './Delya.png'
import GamingButtons from "./components/GamingButtons";
import Statistics from "./components/Statistics";



let today = new Date();
let myTime= today.getHours()

//ниже тестер со временм забитым вручную
//let myTime =23
 let fon
if(myTime > 9 && myTime<20){
    fon=day
}else{
    fon=night
}


const App = (props) => {



    const onClickHandler = () => {
        console.log('test')


    }
    const playMusic = () => {
        let music = new Audio(crispsCrunch)
        music.play()
    }

    const handleClick = () => {
        onClickHandler();
        playMusic();
    }
    return (
        <div className='mainDiv'>
            <img className='fon' src={fon} alt="#"/>

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