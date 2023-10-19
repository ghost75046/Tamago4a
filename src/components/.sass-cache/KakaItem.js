import kakaClasses from "./KakaItem.module.css";
import kaka from "../../images/kaka.png";
import React from "react";


const KakaItem = (props) => {
    return (<div className={kakaClasses.kakaItem}>
            <img src={kaka} alt="#"/>
    </div>
    )
}

export default KakaItem


