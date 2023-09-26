import shava from "../shaverma.png";
import React from "react";
import {rerenderEntireTree} from "../render";
import crispsCrunch from "../crispsCrunch.mp3";
import day from './../day.jpg'
import night from './../night.jpg'
let today = new Date();
let myTime= today.getHours()
    //alert(myTime)
export let fon
if(myTime > 9 && myTime<20){
    fon=day
}else{
    fon=night
}

// добавить функцию, чекающую и выводящую алёрт  if(state.foodLevel.length < 2){alert('Я хочу есть')}
export let state ={
    foodLevel:[<div className='hungryItem'><img src={shava} alt="#"/></div>]
}
let eatingMusic = new Audio(crispsCrunch)
export let  feeder = (postMessage) => {
    if (state.foodLevel.length < 6) {

    state.foodLevel.push(<div className='hungryItem'><img src={shava} alt="#"/></div>)
    eatingMusic.play()
    rerenderEntireTree(state)
    }else{
        alert('Я не голодный')
    }
}


function sayHi() {
    if (state.foodLevel.length > 1){
    state.foodLevel.pop()
    rerenderEntireTree(state)}
    //alert(state.foodLevel.length)
}

setInterval(sayHi, 5000);



export default state