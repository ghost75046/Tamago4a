import React, {useState} from "react";
import darkKnight from "../images/darkKnight.png";
import lightKnight from "../images/lightKnight.jpg";
import'./DarkTheme.css'



const DarkTheme = () => {





    const [currentKnight, setCurrentKnight] = useState(darkKnight)
    const switchKnight = () => {
        if (currentKnight == darkKnight) {
            setCurrentKnight(lightKnight)

        } else {
            setCurrentKnight(darkKnight)
        }

    }




    return (
        <div className="DarkTheme">

        <button onClick={switchKnight}>darkMode demo</button>
            <p >листай ниже и<br/>жми на кнопку))</p>

            <img src={currentKnight} alt="#"/>

        </div>
    )



}

export default DarkTheme

