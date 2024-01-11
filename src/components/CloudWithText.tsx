import React from "react";
import  "./CloudWithText.css";


const CloudWithText = (props:any) => {
    return (<div className='cloudWithText'>
            <p>{props.cloudWithText}</p>
        </div>
    )
}

export default CloudWithText

