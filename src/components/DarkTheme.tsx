import React, {useState,useEffect} from "react";
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
        // console.log(currentKnight)
    }


    let buttonTitle = "darkMode demo"
    const batmanText =<p>листай ниже и<br/>жми на кнопку))</p>
    let lastScrollTop = 0;




    const [currentBatmanText, setCurrentBatmanText] = useState(batmanText)

    useEffect(() => {
        function onScroll() {

            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Прокрутка вниз
                setCurrentBatmanText(<p></p>)
            } else {
                // Прокрутка вверх
                setCurrentBatmanText(batmanText)
            }

            lastScrollTop = scrollTop;
        }
        document.addEventListener("wheel",onScroll);
        return () => {
            document.removeEventListener("wheel",onScroll);
        }
    }, []);

    useEffect(() => {
        console.log("useEffect")
    }, [currentKnight]);


    return (
        <div className="DarkTheme">

        <button onClick={switchKnight}>{buttonTitle}</button>

            {currentBatmanText}

            <img src={currentKnight} alt="#"/>

        </div>
    )



}

export default DarkTheme

