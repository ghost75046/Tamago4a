import Food from "./stats/Food/Food";
import Kaka from "./stats/Kaka/Kaka";
import GamingButtons from "./GamingButtons";
import React from "react";
import "./MyEgg.css";
import CloudWithText from "./CloudWithText";
import Pet from "./Pet";
import Emotion from "./stats/Emotion";
import eggStore from "../store/eggStore";



const MyEgg = () => {
    return (
        <div className='myEgg' style={{
            backgroundImage: `url(${eggStore.currentEgg}),  url(${eggStore.roomWindowBackground})`,
            backgroundSize: 'cover, 350px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center, 200px 230px',
            width: '700px',
            height: '795px',
            margin: '0 auto'
        }}>
            {/*<MyComponent/>*/}
            <CloudWithText/>
            <Food/>
            <Pet/>
            <Kaka/>
            <Emotion/>
            <GamingButtons/>

        </div>
    )
}

export default MyEgg


