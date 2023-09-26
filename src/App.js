import React from 'react';
import './App.css'
//import feeder from './stat/Food'

import crispsCrunch from './crispsCrunch.mp3'
import Food from "./stat/Food";

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

            <Food foodLevel={props.foodLevel} feeder={props.feeder} rerenderEntireTree={props.rerenderEntireTree}/>
            <div className='myEgg'>


                <button onClick={onClickHandler}>1</button>


                <button onClick={handleClick}>2</button>

                {/*<button onClick={feeder}>3</button>*/}
                <button>3</button>
            </div>

        </div>


    )

}


export default App