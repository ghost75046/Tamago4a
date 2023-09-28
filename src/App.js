import React from 'react';
import './App.css'
//import feeder from './stat/Food'

import crispsCrunch from './crispsCrunch.mp3'
import Food from "./stat/Food";
import state from "./redux/state";
import day from './day.jpg'
import night from './night.jpg'
import Kaka from "./stat/Kaka";



let today = new Date();
//let myTime= today.getHours()
let myTime =23
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
            <Food foodLevel={props.foodLevel} feeder={props.feeder} rerenderEntireTree={props.rerenderEntireTree}/>
            <div className='myEgg'>


                <button onClick={onClickHandler}>1</button>


                <button onClick={handleClick}>2</button>

                {/*<button onClick={feeder}>3</button>*/}
                <button>3</button>
            </div>
            <Kaka kakaLevel={props.kakaLevel} kakaCleaner={props.kakaCleaner}/>
        </div>


    )

}


export default App