import shava from "../shaverma.png";
import React from "react";
import {rerenderEntireTree} from "../render";

let state ={
    foodLevel:[<div className='hungryItem'><img src={shava} alt="#"/></div>]
}

export let  feeder = (postMessage) =>{
    state.foodLevel.push(<div className='hungryItem'><img src={shava} alt="#"/></div>)
    console.log(state.foodLevel)
    rerenderEntireTree(state)
}


export default state