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
            weather: '',
            forecast: ''
        }
    }

    // Set up base-url/api-call
   
    // Create a method to load in the local weather when the component is loaded
    componentDidMount() {
        let apiKey = process.env.REACT_APP_WX_API_KEY
        let currWxCall = `http://api.openweathermap.org/data/2.5/weather?lat=${this.props.latitude}&lon=${this.props.longitude}&appid=${apiKey}`
        let forecastCall= `http://api.openweathermap.org/data/2.5/forecast?lat=${this.props.latitude}&lon=${this.props.longitude}&appid=${apiKey}`
        axios.get(currWxCall)
            .then((response) => {
                this.setState({
                    weather: response.data
                })
                console.log(response.data)
            }).catch(err => {console.log(`There was an error: ${err}`)})
        axios.get(forecastCall) 
            .then((response) => {
                this.setState({
                    forecast: response.data
                })
                console.log(response.data)
            }).catch(err => {console.log(`Error retrieving forecast: ${err}`)})    
        
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

        <div className="containerDiv">   

            <div className="mainWindow">

                <Link to="/">Go back</Link>
               
                <div>
                    <CurrConditions {...this.state.weather} />
                </div>
                <div>
                    <FiveForecast {...this.state.forecast} />
                </div>

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
