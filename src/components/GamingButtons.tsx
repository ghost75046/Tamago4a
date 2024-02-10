import React from 'react';
import '../App.css'
import'./GamingButtons.css'
import foodLevelStore from "../store/foodLevelStore";
import kakaLevelStore from "../store/kakaLevelStore";
import playingStore from "../store/playingStore";



const GamingButtons = () => {

    return (
        <div className='GamingButtons'>
            <button onClick={foodLevelStore.foodLevelIncrement}>Feed</button>
            <button id='cleanButton' onClick={kakaLevelStore.kakaCleaner}>Clean</button>
            <button onClick={playingStore.playing}>Play</button>
            {/*<button onClick={() => store.textInCloudChange('played')}>play2</button>*/}
        </div>


    )

}


export default GamingButtons