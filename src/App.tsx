import React from 'react';
import './App.css'
import Food from "./components/stats/Food/Food";
import Kaka from "./components/stats/Kaka/Kaka";
import Delya from './images/DelyaGif2.gif'
import GamingButtons from "./components/GamingButtons";
import CloudWithText from "./components/CloudWithText";
import Pet from "./components/Pet";
import Emotion from "./components/stats/Emotion";

//import Weather from "./components/Weather";


const App = (props:any) => {


    return (
        <div className='mainDiv' style={{
             backgroundColor: `${props.backgroungColor}`
        }}>


            <button onClick={props.darkTheme}>darkTheme</button>

            <div className='myEgg' style={{
                backgroundImage: `url(${props.currentEgg}),  url(${props.currentFont})`,
                backgroundSize: 'cover, 350px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center, 200px 230px',
                width: '700px',
                height: '795px',
                margin: '0 auto'
            }}>

                <CloudWithText cloudWithText={props.cloudWithText}/>

                <Food foodLevel={props.foodLevel} feeder={props.feeder} rerenderEntireTree={props.rerenderEntireTree}/>


                <Pet Delya={Delya}/>

                <Kaka kakaLevel={props.kakaLevel} kakaCleaner={props.kakaCleaner}/>
                <Emotion emotion={props.emotion} />
                <GamingButtons feeder={props.feeder} kakaCleaner={props.kakaCleaner} playing={props.playing}/>

            </div>
        </div>
    )

}


export default App