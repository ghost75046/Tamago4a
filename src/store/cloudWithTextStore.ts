import {observable} from "mobx";


const cloudWithTextStore = observable({
    textInCloud:"MurMiay",
    textInCloudChange(newTextInCloud:string){
        cloudWithTextStore.textInCloud = newTextInCloud
        setTimeout(cloudWithTextStore.textInCloudDefaulter, 1500);
    },
    textInCloudDefaulter(){
        cloudWithTextStore.textInCloud = "MurMiay"
    }
})


export default cloudWithTextStore