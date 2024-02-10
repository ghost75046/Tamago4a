import {observable} from "mobx";
import HungryItem from "../components/stats/Food/HungryItem";
import shava from "../images/shaverma.png";

import React from "react";
import crispsCrunch from "../audio/crispsCrunch.mp3";
import kakaLevelStore from "./kakaLevelStore";
import cloudWithTextStore from "./cloudWithTextStore";
import emotionStore from "./emotionStore";



const foodLevelStore = observable({
    foodLevel: [<HungryItem shavaImg={shava} key="1"/>],
    foodLevelIncrement(){

        if(foodLevelStore.foodLevel.length < 6){
         foodLevelStore.foodLevel.push(<HungryItem shavaImg={shava} key="1"/>);
        foodLevelStore.eatingSound.play()
            cloudWithTextStore.textInCloudChange("Спасибо за еду!")
            emotionStore.changeEmotion()
        if(kakaLevelStore.kakaLevel.length < 7) {
            setTimeout(kakaLevelStore.kakaLevelIncrement, 5000);
            emotionStore.changeEmotion()
        }
        }else {
            cloudWithTextStore.textInCloudChange('Я не голоден')
        }
    },
    eatingSound : new Audio(crispsCrunch),
    makingHungry()  {

        if (foodLevelStore.foodLevel.length > 1) {
            foodLevelStore.foodLevel.pop()
        }
        emotionStore.changeEmotion()
    },
    isHungry() {
        if (foodLevelStore.foodLevel.length < 3) {
            cloudWithTextStore.textInCloudChange("Я голоден")
        }
    }
})
setInterval(foodLevelStore.makingHungry, 7000);
setInterval(foodLevelStore.isHungry, 5000);

export default foodLevelStore