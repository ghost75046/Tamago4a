import {observable} from "mobx";
import day from "../images/day.jpg";
import night from "../images/night.jpg";
import defaultEgg from "../images/defaultEggneNoGlass.png"



const eggStore = observable({
roomWindowBackground:day,
    currentEgg: defaultEgg
})

let myTime =  new Date().getHours()

if (myTime > 9 && myTime < 20) {
    eggStore.roomWindowBackground = day
} else {
    eggStore.roomWindowBackground = night
}

export default eggStore
