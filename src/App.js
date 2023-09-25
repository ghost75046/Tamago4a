import React from 'react';
import './App.css'
import logo from './defaultEgg.png'
import logo2 from './vino07.jpg'
import shava from './shaverma.png'
import crispsCrunch from './crispsCrunch.mp3'

function App(props) {


    const onClickHandler = () => {
        console.log('test')


    }
    const playMusic = () => {
        let music = new Audio(crispsCrunch)
        music.play()
    }

    const handleClick= () =>{
        onClickHandler();playMusic();
    }
    return (
        <div className='mainDiv'>

            <div>
                комната
                <div className='hungryLevel'>
                    <div className='hungryItem'>
                        <img src={shava} alt="#"/>
                    </div>
                    <div className='hungryItem'>
                        <img src={shava} alt="#"/>
                    </div>
                    <div className='hungryItem'>
                        <img src={shava} alt="#"/>
                    </div>
                </div>
                <div className='myEgg'>


                    <button onClick={onClickHandler}>1</button>


                    <button onClick={handleClick}>2</button>

                    <button>3</button>
                </div>

            </div>


        </div>


    )

}


export default App