import React from "react";
import  "./Pet.css";





const Pet = (props:any) => {
    return (<div>
            <img className='Pet' src={props.Delya} alt="#"/>
        </div>
    )
}

export default Pet

