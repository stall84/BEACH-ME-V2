import React, { Component } from 'react';
import axios from 'axios';

import './styles/BeachFiveForecast.css';

class BeachFiveForecast extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            forecast: ''
        }
    }

    componentDidMount() {
        let apiKey = process.env.REACT_APP_WX_API_KEY
        //let forecastCall = `http://api.openweathermap.org/data/2.5/forecast?lat=${}&lon=${}&appid=${apiKey}`
    }


    render() {
        return (
            
            <div className="beachForecastContainer"> 

                <div className="beachForecast">
                    <div className="beachName">PC</div>
                    <div className="beachDayBox">Day1</div>
                    <div className="beachDayBox">Day2</div>
                    <div className="beachDayBox">Day3</div>
                    <div className="beachDayBox">Day4</div>
                    <div className="beachDayBox">Day5</div>
                </div> 
                <div className="beachForecast">
                    <div className="beachName">HHI</div>
                    <div className="beachDayBox">Day1</div>
                    <div className="beachDayBox">Day2</div>
                    <div className="beachDayBox">Day3</div>
                    <div className="beachDayBox">Day4</div>
                    <div className="beachDayBox">Day5</div>
                </div>

            </div>
        )
    }
}

export default BeachFiveForecast
