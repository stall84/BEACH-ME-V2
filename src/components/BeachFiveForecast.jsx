import React, { Component } from 'react';
import './styles/BeachFiveForecast.css';

class BeachFiveForecast extends Component {
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
