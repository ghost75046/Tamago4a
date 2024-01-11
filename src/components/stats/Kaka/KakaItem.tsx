import React from "react";
import "./KakaItem.css";


const KakaItem = (props:any) => {
    return (
        <div className='kakaItem'>
            <img src={props.kaka} alt="#"/>
        </div>
    )
}

export default KakaItem


