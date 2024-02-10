import {observable} from "mobx";
import happy from "../images/emotionHappy.png"
import normal from "../images/emotionNormal.png"
import sad from "../images/emotionSad.png"
import foodLevelStore from "./foodLevelStore";
import kakaLevelStore from "./kakaLevelStore";
import playingStore from "./playingStore";




const emotionStore = observable({
currentEmotion:normal,
    changeEmotion() {
        if (foodLevelStore.foodLevel.length < 3 || kakaLevelStore.kakaLevel.length > 1 || !playingStore.ifPlayedRecently) {
            emotionStore.currentEmotion = sad
        } else if (foodLevelStore.foodLevel.length > 3 && kakaLevelStore.kakaLevel.length === 0 && playingStore.ifPlayedRecently) {
            emotionStore.currentEmotion = happy
        } else {
            emotionStore.currentEmotion = normal
        }
    }

})


export default emotionStore









