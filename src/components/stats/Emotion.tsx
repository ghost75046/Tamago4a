import React from "react";
import './Emotion.css'
import emotionStore from "../../store/emotionStore";
import {observer} from "mobx-react-lite";




const Pet = () => {
    return (<div>
            <img className='emotion' src={emotionStore.currentEmotion} alt="#"/>
        </div>
    )
}

export default observer(Pet)

