import React from 'react'
import './styles/FiveForecast.css'

export default function FiveForecast (props) {

    if (!props.city) {
        return null;
    }
    if (!props.list) {
        return null;
    }
   
    let icon = props.list[1].weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${icon}.png`

        return (
            <div className="container">
                <div className="forecastContainer">
                    <div className="nameBox">{props.city.name}</div>
                    <div className="dayBox">
                        <div className="localConditions">
                            <h2><img src={iconUrl} alt="img" /> {props.list[1].weather[0].description.toUpperCase()}</h2>
                        </div>
                    </div>
                    <div className="dayBox">Day2FLERT</div>
                    <div className="dayBox">Day3</div>
                    <div className="dayBox">Day4</div>
                    <div className="dayBox">Day5</div>
                </div>
                
            </div>
        )
    
}
