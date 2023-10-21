import shava from "../images/shaverma.png";
import kaka from "../images/kaka.png"
import React from "react";
import {rerenderEntireTree} from "../render";
import crispsCrunch from "../audio/crispsCrunch.mp3";
import cleanerMusic from "../audio/cleanerMusic.mp3"
import day from '../images/day.jpg'
import night from '../images/night.jpg'
import emotionNormalPath from "../images/emotionNormal.png"
import emotionHappyPath from "../images/emotionHappy.png"
import emotionSadPath from "../images/emotionSad.png"
import KakaItem from "../components/stats/Kaka/KakaItem";
import HungryItem from "../components/stats/Food/HungryItem";
import defaultEgg from "../images/defaultEggneNoGlass.png"

//хранилище аудио
const eatingMusic = new Audio(crispsCrunch)
const cleaningMusic = new Audio(cleanerMusic)

//после действий типа кормёжки или игры добавить запоминание таймстемпа и отталкиваясь от него можно чекать что адвно не играл и выводить алёрт "поиграй со мной"
//добавить возможность спать по ночам
//добавить звуки появления какашек и звук урчания живота, если осталось мало очков еды(можно синхронно с надписью "я голодный")
//добавить новертацию SCSS в CSS
//как задавать background-image переменной? фон в зависимости от времени суток

//проверка времени суток
let today  = new Date()


//дата для логгера
let loggerTimer = () =>{
    today = new Date();
    let logTime=  `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}.${today.getMilliseconds()} `
    return logTime}
// setInterval(ttoday, 1000);

/*const ttoday = () => {
    today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}*/
// setInterval(today, 1000);

let myTime= today.getHours()


    //alert(myTime)
export let fon
if(myTime > 9 && myTime<20){
    fon=day
}else{
    fon=night
}
//проверка времени суток end
//время для логов


function generateRandomWord(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomWord = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomWord += characters.charAt(randomIndex);
    }

    return randomWord;
}




// функция, чекающая и выводящая алёрт  если тамагочи голодный
let foodChecker = ()=>{
    if(state.foodLevel.length < 2){
        state.textInCloud='Я хочу есть'
        rerenderEntireTree(state)
        setTimeout(cloudCleaner,1000)
    }
}


// функция, чекающая и выводящая алёрт  если тамагочи голодный end



export let state ={
    foodLevel:[<HungryItem shavaImg={shava} key={generateRandomWord(13)}/>],kakaLevel:[], emotion:{value:'normal',emotionPicturePath:emotionHappyPath}, ifPlayedRecently:false,textInCloud:'Murrrrr...',currentFon:fon,currentEgg:defaultEgg
}




//питомец ходит в туалет
export let kakaPush  = () => {
    if (state.kakaLevel.length < 6) {

        state.kakaLevel.push(<KakaItem kaka={kaka} key={generateRandomWord(13)}/>)
        console.log( `${loggerTimer()} afterEatingKakaLevel = ${state.kakaLevel.length}`)
        rerenderEntireTree(state)
    }else{

        alert('dieInShit')
    }
}

//кормёжка
export let  feeder = () => {
    if (state.foodLevel.length < 6) {

    state.foodLevel.push(<HungryItem shavaImg={shava} key={generateRandomWord(13)}/>)
    eatingMusic.play()


        if (state.kakaLevel.length < 7) {
            setTimeout(kakaPush, 5000);
        }
    rerenderEntireTree(state)
        console.log( `${loggerTimer()} currentFoodLevel = ${state.foodLevel.length}`)
    }else{
        // alert('Я не голодный')
        state.textInCloud='Я не голодный'
        console.log( `${loggerTimer()} notHungry`)
        rerenderEntireTree(state)
        setTimeout(cloudCleaner,1000)



    }
}



//уборка за питомцем
export let  kakaCleaner = () => {
            state.kakaLevel.pop()
        cleaningMusic.play()
        console.log( `${loggerTimer()} afterCleaningKakaLevel = ${state.kakaLevel.length}`)
        rerenderEntireTree(state)

}


//повышение уровня голода
function makeHungry() {
    if (state.foodLevel.length > 1){
    state.foodLevel.pop()
    rerenderEntireTree(state)}
    //alert(state.foodLevel.length)
}


//проверка и изменение настроения. В будущем вместо интервала сделать изменение эмоции по изменению данных в стэйте
export let checkEmotion = () => {
let previousEmotion=state.emotion.value


    if( state.foodLevel.length <3 || state.kakaLevel.length>1 || state.ifPlayedRecently===false){
        state.emotion.value = 'sad'
    }else if( state.foodLevel.length >3 && state.kakaLevel.length===0 && state.ifPlayedRecently===true){
        state.emotion.value = 'happy'
    }


    switch (state.emotion.value) {
        case 'happy':
            state.emotion.emotionPicturePath = emotionHappyPath;
            break

        case 'normal':
            state.emotion.emotionPicturePath = emotionNormalPath;
            break

        case 'sad':
            state.emotion.emotionPicturePath = emotionSadPath;
            break

        default:
            state.emotion.emotionPicturePath = emotionNormalPath;
            break
    }

    if(previousEmotion!==state.emotion.value)
    console.log( `${loggerTimer()} currentEmotion = ${state.emotion.value}`)
    rerenderEntireTree(state)

    if(state.kakaLevel.length>0){
        state.textInCloud='Проснись, я обосрался'
        console.log( `${loggerTimer()} needToClean `)
        rerenderEntireTree(state)
        setTimeout(cloudCleaner,1000)
    }
}




//игра с питомцем
export let playing = () =>{
state.ifPlayedRecently=true

    state.textInCloud='Спасибо за игру'
    console.log( `${loggerTimer()} playTime `)
    rerenderEntireTree(state)
    setTimeout(cloudCleaner,1000)


}

//таймаут до следующего желания поиграть
let palyingTimeout = () =>{
    state.ifPlayedRecently=false
        state.textInCloud='Поиграй со мной'
    console.log( `${loggerTimer()} needToPlay `)
    rerenderEntireTree(state)
    setTimeout(cloudCleaner,1000)
}

//обнуление текста в облаке
let cloudCleaner= ()=>{
    state.textInCloud='Mrrrrr...'
    //setTimeout(rerenderEntireTree(state),7000)
}


//Интервалы
setInterval(checkEmotion, 1000);
setInterval(palyingTimeout, 15000);
setInterval(foodChecker, 5000);
setInterval(makeHungry, 7000);



//export let cloudWithText=<div className='cloudWithText'>{textInCloud}</div>
export default state