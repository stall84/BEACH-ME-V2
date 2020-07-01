import React, { Component } from 'react'
import './styles/FiveForecast.css'

class FiveForecast extends Component {
    render() {
        return (
            <div className="container">
                <div className="forecastContainer">
                    <div className="dayBox">Day1</div>
                    <div className="dayBox">Day2</div>
                    <div className="dayBox">Day3</div>
                    <div className="dayBox">Day4</div>
                    <div className="dayBox">Day5</div>
                </div>
                
            </div>
        )
    }
}

export default FiveForecast
