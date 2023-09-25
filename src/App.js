import React from 'react';
import './App.css'


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

            <Food/>
            <div className='myEgg'>


                <button onClick={onClickHandler}>1</button>


                <button onClick={handleClick}>2</button>

                <button>3</button>
            </div>

        </div>


    )

}


export default App