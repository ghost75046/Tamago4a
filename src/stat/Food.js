import React from 'react';
import shava from "../shaverma.png";


const Food = () => {
    return (<div>
            комната
            <div className='hungryLevel'>
                <div className='hungryItem'>
                    <img src={shava} alt="#"/>
                </div>
                <div className='hungryItem'>
                    <img src={shava} alt="#"/>
                </div>
                <div className='hungryItem'>
                    <img src={shava} alt="#"/>
                </div>
            </div>
        </div>
    )
}

export default Food