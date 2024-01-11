import React from 'react';
import  './Food.css'




const Food = (props:any) => {
    return (
        <div>
            <div className='hungryLevel' >
                {props.foodLevel}
            </div>
        </div>
    )
}

export default Food