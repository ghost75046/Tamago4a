import React from "react";
import  "./CloudWithText.css";
import cloudWithTextStore from "../store/cloudWithTextStore";
import {observer} from "mobx-react-lite";

const CloudWithText = () => {
    return (<div className='cloudWithText'>
            <p>{cloudWithTextStore.textInCloud}</p>
        </div>
    )
}

export default observer(CloudWithText)

