import React from 'react';
import ReactDOM from 'react-dom/client';
import state, {feeder, kakaCleaner,playing} from "./redux/state";
import App from "./App";


export let rerenderEntireTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App  foodLevel={state.foodLevel} feeder={feeder} kakaLevel={state.kakaLevel} kakaCleaner={kakaCleaner} rerenderEntireTree={rerenderEntireTree} emotion={state.emotion.emotionPicturePath} playing={playing} cloudWithText={state.textInCloud}/>
        </React.StrictMode>
    );
}







