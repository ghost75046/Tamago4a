import React from "react";
import './HungryItem.css'




const HungryItem = (props:any) => {
    return (
        <div className='hungryItem'>
            <img src={props.shavaImg} alt="#"/>
        </div>
    )
}

export default HungryItem