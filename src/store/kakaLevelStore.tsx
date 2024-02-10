import {observable} from "mobx";
import React from "react";
import KakaItem from "../components/stats/Kaka/KakaItem";
import kaka from "../images/kaka.png";
import PukSound from "../audio/Puk.mp3";
import cloudWithTextStore from "./cloudWithTextStore";
import cleanerSound from "../audio/cleanerMusic.mp3";
import emotionStore from "./emotionStore";


const kakaLevelStore = observable({
    kakaLevel: new Array(),
    kakaLevelIncrement() {

        if (kakaLevelStore.kakaLevel.length < 6) {
            kakaLevelStore.kakaLevel.push(<KakaItem kaka={kaka} key="2"/>);
            kakaLevelStore.PukingSound.play()
            cloudWithTextStore.textInCloudChange("время убирать какахи")
            emotionStore.changeEmotion()
        } else if(kakaLevelStore.kakaLevel.length == 6) {
            kakaLevelStore.kakaLevel.push(<KakaItem kaka={kaka} key="2"/>);
            kakaLevelStore.PukingSound.play()
            cloudWithTextStore.textInCloudChange("утонул в какахах")
        }

    },
    PukingSound: new Audio(PukSound),
    CleaningSound: new Audio(cleanerSound),
    kakaCleaner() {

        if (kakaLevelStore.kakaLevel.length > 0) {
            kakaLevelStore.kakaLevel.pop()
            kakaLevelStore.CleaningSound.play()
            cloudWithTextStore.textInCloudChange("Спасибо за уборку!")
            emotionStore.changeEmotion()
    } else if (kakaLevelStore.kakaLevel.length == 0) {
            cloudWithTextStore.textInCloudChange("Здесь уже чисто")
            emotionStore.changeEmotion()
        }
    }


})


export default kakaLevelStore