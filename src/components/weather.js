import React from "react";
const Weather = props=>(
    <div>
                {props.city &&
                <div>
                <p>Местоположение: {props.city},{props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Давление: {props.pressure}</p>
                <p>Заход солнца: {props.sunset}</p> 
                </div>
                                }
                <div>{props.error}</div>
            </div>
);

export default Weather;