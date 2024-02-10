/*
import React from "react";

//functions
import {rerenderEntireTree} from "../render";
import KakaItem from "../components/stats/Kaka/KakaItem";
import HungryItem from "../components/stats/Food/HungryItem";
//audio
import crispsCrunch from "../audio/crispsCrunch.mp3";
import cleanerMusic from "../audio/cleanerMusic.mp3"
import mrrrMusic from "../audio/Mrrr.mp3"
import MeowSound from "../audio/Meow.mp3"
import PukSound from "../audio/Puk.mp3"
//images
import shava from "../images/shaverma.png";
import kaka from "../images/kaka.png"
import day from '../images/day.jpg'
import night from '../images/night.jpg'
import emotionNormalPath from "../images/emotionNormal.png"
import emotionHappyPath from "../images/emotionHappy.png"
import emotionSadPath from "../images/emotionSad.png"
import defaultEgg from "../images/defaultEggneNoGlass.png"

//хранилище аудио
const eatingMusic = new Audio(crispsCrunch)
const cleaningMusic = new Audio(cleanerMusic)
const mrrringMusic = new Audio(mrrrMusic)
const MeowingSound = new Audio(MeowSound)
export const PukingSound = new Audio(PukSound)

//нужно убрать циклическую зависимость между state и render
//добавить возможность спать по ночам
//добавить  звук урчания живота, если осталось мало очков еды(можно синхронно с надписью "я голодный") | звучит так себе, мб и не добавлять

//получаем текущую дату
let today = new Date()
// форматирование даты для логгера
let loggerTimer = () => {
    let today = new Date()
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}.${today.getMilliseconds()} `
}

//смена фона в окнах комнаты в зависимости от времени суток
let myTime = today.getHours()
export let fon: string
if (myTime > 9 && myTime < 20) {
    fon = day
} else {
    fon = night
}

//генерируем уникальные ключи для шкалы еды и каках
function generateRandomWord(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomWord = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomWord += characters.charAt(randomIndex);
    }

    return randomWord;
}

// функция, чекающая если тамагочи голодный и выводящая инфу об этом
let foodChecker = () => {

    if (state.foodLevel.length < 2) {
        state.textInCloud = 'Я хочу есть'
        rerenderEntireTree()
        setTimeout(cloudCleaner, 1000)
    }
}

let myBackgroundColor = 'antiquewhite'
export let darkTheme = () => {

    if (state.backgroundColor === 'antiquewhite') {
        state.backgroundColor = 'gray'
    } else if (state.backgroundColor === 'gray') {
        state.backgroundColor = 'antiquewhite'
    }
    // state.backgroundColor = 'antiquewhite' ? 'gray' : 'antiquewhite'
    rerenderEntireTree()
    console.log(myBackgroundColor, state.backgroundColor)

}

//костыль, чтобы пуш внутри kakaPush не ругался на тип элементов массива
const kakaLevelMas = [<div></div>]
kakaLevelMas.pop();

//собственно сам state
export let state = {
    foodLevel: [<HungryItem shavaImg={shava} key={generateRandomWord(13)}/>],
    kakaLevel: kakaLevelMas,
    emotion:
        {
            value: 'normal',
            emotionPicturePath: emotionHappyPath
        },
    ifPlayedRecently: false, textInCloud: 'Murrrrr...',
    currentFon: fon,
    currentEgg: defaultEgg,
    backgroundColor: myBackgroundColor
}

//питомец ходит в туалет
export const kakaPush = () => {
    if (state.kakaLevel.length < 6) {
        state.kakaLevel.push(<KakaItem kaka={kaka} key={generateRandomWord(13)}/>)
        PukingSound.play()
        console.log(`${loggerTimer()} afterEatingKakaLevel = ${state.kakaLevel.length}`)
        rerenderEntireTree()
    } else {

        alert('dieInShit')
    }
}

//кормёжка
export const feeder = () => {
    if (state.foodLevel.length < 6) {

        state.foodLevel.push(<HungryItem shavaImg={shava} key={generateRandomWord(13)}/>)
        eatingMusic.play()


        if (state.kakaLevel.length < 7) {
            setTimeout(kakaPush, 5000);
        }
        rerenderEntireTree()
        console.log(`${loggerTimer()} currentFoodLevel = ${state.foodLevel.length}`)
    } else {

        state.textInCloud = 'Я не голодный'
        console.log(`${loggerTimer()} notHungry`)
        rerenderEntireTree()
        setTimeout(cloudCleaner, 1000)


    }
}

//уборка за питомцем
export const kakaCleaner = () => {
    state.kakaLevel.pop()
    cleaningMusic.play()
    console.log(`${loggerTimer()} afterCleaningKakaLevel = ${state.kakaLevel.length}`)
    rerenderEntireTree()

}

//повышение уровня голода
function makeHungry() {
    if (state.foodLevel.length > 1) {
        state.foodLevel.pop()
        rerenderEntireTree()
    }

}

//проверка и изменение настроения. В будущем вместо интервала сделать изменение эмоции по изменению данных в стэйте
export const checkEmotion = () => {
    let previousEmotion = state.emotion.value

    if (state.foodLevel.length < 3 || state.kakaLevel.length > 1 || !state.ifPlayedRecently) {
        state.emotion.value = 'sad'
    } else if (state.foodLevel.length > 3 && state.kakaLevel.length === 0 && state.ifPlayedRecently) {
        state.emotion.value = 'happy'
    }

    switch (state.emotion.value) {
        case 'happy':
            state.emotion.emotionPicturePath = emotionHappyPath;
            mrrringMusic.play()
            break

        case 'normal':
            state.emotion.emotionPicturePath = emotionNormalPath;
            break

        case 'sad':
            state.emotion.emotionPicturePath = emotionSadPath;
            mrrringMusic.pause()
            break

        default:
            state.emotion.emotionPicturePath = emotionNormalPath;
            break
    }

    if (previousEmotion !== state.emotion.value) {
        console.log(`${loggerTimer()} currentEmotion = ${state.emotion.value}`)
        rerenderEntireTree()
    }

//оповещение о необходимости уборки
    if (state.kakaLevel.length > 0) {
        state.textInCloud = 'Время убирать какахи'
        console.log(`${loggerTimer()} needToClean `)
        rerenderEntireTree()
        setTimeout(cloudCleaner, 1000)
    }
}

//игра с питомцем
export const playing = () => {
    state.ifPlayedRecently = true
    state.textInCloud = 'Спасибо за игру'
    MeowingSound.play()
    console.log(`${loggerTimer()} playTime `)
    rerenderEntireTree()
    setTimeout(cloudCleaner, 1000)
}

//таймаут до следующего желания поиграть
const palyingTimeout = () => {
    state.ifPlayedRecently = false
    state.textInCloud = 'Поиграй со мной'
    console.log(`${loggerTimer()} needToPlay `)
    rerenderEntireTree()
    setTimeout(cloudCleaner, 1000)
}

//обнуление текста в облаке
const cloudCleaner = () => {
    state.textInCloud = 'Mrrrrr...'
    //setTimeout(rerenderEntireTree(state),7000)
}

//Интервалы
//проверка эмоции
setInterval(checkEmotion, 1000);
//таймуат до следующего желания поиграть
setInterval(palyingTimeout, 15000);
//проверка уровная сытости
setInterval(foodChecker, 5000);
//уменьшение уровня сытости
setInterval(makeHungry, 7000);

export default state
*/
