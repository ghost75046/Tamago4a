import React from 'react';
import ReactDOM from 'react-dom/client';
import state, {feeder} from "./redux/state";
import App from "./App";


export let rerenderEntireTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App  foodLevel={state.foodLevel} feeder={feeder} rerenderEntireTree={rerenderEntireTree}/>
        </React.StrictMode>
    );
}







