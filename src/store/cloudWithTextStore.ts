import {observable} from "mobx";

const store = observable({
    textInCloud:"MurMiay",textInCloudChange(newTextInCloud:string){
        store.textInCloud = newTextInCloud
    }
})


export default store