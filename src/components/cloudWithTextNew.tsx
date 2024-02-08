import {observer} from "mobx-react-lite";
import store from "../store/cloudWithTextStore";
import React from "react";

const newCloud = () => {

    return (<div>
        <p>{store.textInCloud}</p>
        <button onClick={() =>store.textInCloudChange('test')}>changeCloud</button>

    </div>)
}

export default observer(newCloud)