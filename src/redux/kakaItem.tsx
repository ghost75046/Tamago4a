import {makeAutoObservable} from "mobx";
import KakaItem from "../components/stats/Kaka/KakaItem";
import kaka from "../images/kaka.png";

import React from "react";



class kakaClass {
    kakaLevelMas = [<div></div>]
    constructor() {
        makeAutoObservable(this)
    }
    kakaPush()  {
        if (this.kakaLevelMas.length < 6) {
            this.kakaLevelMas.push(<KakaItem kaka={kaka} key={'1'}/>)

            } else {

            alert('dieInShit')
        }
    }
}

export default new kakaClass()