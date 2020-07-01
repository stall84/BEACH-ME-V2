import React, { Component } from 'react';
import CurrConditions from './CurrConditions';
import FiveForecast from './FiveForecast';
import axios from 'axios';
import { connect } from 'react-redux';
import './styles/Forecaster.css';
import { Link } from 'react-router-dom';



class Forecaster extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            weather: ''
        }
    }

    // Set up base-url/api-call
   
    // Create a method to load in the local weather when the component is loaded
    componentDidMount() {
        const city = 'Destin,FL,USA';
        const apiKey = process.env.REACT_APP_WX_API_KEY
        const apiCall = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
        axios.get(apiCall)
            .then((response) => {
                this.setState({
                    weather: response.data
                })
                console.log(this.state)
            }).catch(err => {console.log(`There was an error: ${err}`)})
        
    }

    render() {
        // Method below was used to map over array when one was available in axios payload. When we went back to 
        // payload being object of objects, map method would no longer work & explicitly passed down which object we wanted through
        // props {...this.state.weather.main}
        /*
        const wxJsx = this.state.weather.map((wx,index) => {
            return <WxDisplay key={index} {...wx} />
        })
        */
        return (
            <div className="mainWindow">

                <Link to="/">Go back</Link>
                <div>
                    <span>{this.props.latitude}</span>
                    <span>{this.props.longitude}</span>
                </div>
                <div>
                    <CurrConditions {...this.state.weather} />
                </div>
                <div>
                    <FiveForecast />
                </div>

            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Forecaster);
