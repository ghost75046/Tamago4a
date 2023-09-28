import shava from "../shaverma.png";
import kaka from "../kaka.png"
import React from "react";
import {rerenderEntireTree} from "../render";
import crispsCrunch from "../crispsCrunch.mp3";
import cleanerMusic from "../cleanerMusic.mp3"
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
    foodLevel:[<div className='hungryItem'><img src={shava} alt="#"/></div>],kakaLevel:[<div className='kakaItem'><img src={kaka} alt="#"/></div>]
}
let eatingMusic = new Audio(crispsCrunch)
let cleaningMusic = new Audio(cleanerMusic)

export let kakaPush  = () => {
    if (state.kakaLevel.length < 6) {

        state.kakaLevel.push(<div className='kakaItem'><img src={kaka} alt="#"/></div>)

        rerenderEntireTree(state)
    }else{
        alert('tooManyKaka')
    }
}
export let  feeder = () => {
    if (state.foodLevel.length < 6) {

    state.foodLevel.push(<div className='hungryItem'><img src={shava} alt="#"/></div>)
    eatingMusic.play()
        setTimeout(kakaPush, 5000);
    rerenderEntireTree(state)
    }else{
        alert('Я не голодный')
    }
}



export let  kakaCleaner = () => {
    if (state.kakaLevel.length < 6) {

        state.kakaLevel.pop()
        cleaningMusic.play()
        rerenderEntireTree(state)
    }else{
        alert('died in shit')
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