import shava from "../shaverma.png";
import React from "react";

let state ={
    foodLevel:[<div className='hungryItem'><img src={shava} alt="#"/></div>]
}

function feeder(){
    state.foodLevel.push('<div className=\'hungryItem\'><img src={shava} alt="#"/></div>')
    console.log(state.foodLevel)
}


export default state