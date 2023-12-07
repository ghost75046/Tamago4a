import React from "react";


//в хроме navigator.geolocation не работает, пока тестил на мозиле
//test
const Weather = (props) => {
    let mainImg
    const api = '02f6bf99ef27b2a8abe008cfb6daa12b';
    window.addEventListener('load', () => {
        let long;
        let lat;
        // Accesing Geolocation of User
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                // Storing Longitude and Latitude in variables
                long = position.coords.longitude;
                lat = position.coords.latitude;
                const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

                // Using fetch to get data
                fetch(base)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        mainImg = data.main;
                        const place = data.name;
                        const { description, icon } = data.weather[0];
                        const { sunrise, sunset } = data.sys;
                    });
            return mainImg
            });
        }

    });


    return (<div>
            currentWeather {mainImg}
        </div>
    )
}

export default Weather








