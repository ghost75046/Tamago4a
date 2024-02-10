import React from 'react';
import './App.css'
import MyEgg from "./components/MyEgg";

const App = (props: any) => {

    return (
        <div className='mainDiv' style={{
            backgroundColor: `${props.backgroungColor}`
        }}>
            <button onClick={props.darkTheme}>darkTheme</button>
            <MyEgg/>
        </div>
    )
}


export default App