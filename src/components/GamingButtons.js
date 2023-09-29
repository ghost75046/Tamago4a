import React from 'react';
import '../App.css'


const GamingButtons = (props) => {

    return (
        <div className='GamingButtons'>
            <button onClick={props.feeder}>Покормить</button>
            <button onClick={props.kakaCleaner}>Убрать</button>
            <button>Поиграть</button>
        </div>


    )

}


export default GamingButtons