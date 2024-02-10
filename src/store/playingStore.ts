import {observable} from "mobx";
import cloudWithTextStore from "./cloudWithTextStore";


import meowSound from "../audio/Meow.mp3";
import emotionStore from "./emotionStore";



const playingStore = observable({
    ifPlayedRecently:false,
    playing() {
        cloudWithTextStore.textInCloudChange("Спасибо за игру!")
        playingStore.ifPlayedRecently = true
        playingStore.meowSound.play()
        emotionStore.changeEmotion()
    },
    needToPlay() {
        playingStore.ifPlayedRecently = false
        cloudWithTextStore.textInCloudChange("Поиграй со мной")
    },
    meowSound : new Audio(meowSound),


})
setInterval(playingStore.needToPlay, 17000);

export default playingStore






