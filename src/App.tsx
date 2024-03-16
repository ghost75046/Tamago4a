import React from 'react';
import './App.css'
import MyEgg from "./components/MyEgg";
import DarkTheme from "./components/DarkTheme";

const App = () => {

    return (
        <div className='mainDiv' style={{
            backgroundColor: `antiquewhite`
        }}>

            <MyEgg/>
            <DarkTheme />
        </div>
    )
}


export default App