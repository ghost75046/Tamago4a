import React from 'react';
import ReactDOM from 'react-dom/client';
import state, {feeder, kakaCleaner,playing} from "./redux/state";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = () => {

    root.render(
        <React.StrictMode>
            <App  foodLevel={state.foodLevel} feeder={feeder} kakaLevel={state.kakaLevel} kakaCleaner={kakaCleaner} rerenderEntireTree={rerenderEntireTree} emotion={state.emotion.emotionPicturePath} playing={playing} cloudWithText={state.textInCloud} currentFont={state.currentFon} currentEgg={state.currentEgg}/>
        </React.StrictMode>
    );
}







