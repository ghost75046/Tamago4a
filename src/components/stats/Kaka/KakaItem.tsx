import kakaClasses from "./KakaItem.module.css";

import React from "react";


const KakaItem = (props:any) => {
    return (
        <div className={kakaClasses.kakaItem}>
            <img src={props.kaka} alt="#"/>
        </div>
    )
}

export default KakaItem


