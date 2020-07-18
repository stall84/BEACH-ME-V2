import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { kelvinConverter } from '../utilities';

import './styles/BeachFiveForecast.css';

class BeachFiveForecast extends Component {

    constructor(props) {
        super(props) 

        this.state = {       
            forecast1: null,
            forecast2: null,
            forecast3: null,
            forecast4: null,
            forecast5: null
        }
    }

    componentDidMount() {
     
        var beachWxArr = []
        this.props.fiveBeaches.map(beach => beachWxArr.push(beach.name)) 
        const apiKey = process.env.REACT_APP_WX_API_KEY
        
        // Setting all 5 weather api calls to constants. Attempting to change to https call for security 

        const beach1forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${beachWxArr[0]},&appid=${apiKey}`
        const beach2forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${beachWxArr[1]},&appid=${apiKey}`
        const beach3forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${beachWxArr[2]},&appid=${apiKey}`
        const beach4forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${beachWxArr[3]},&appid=${apiKey}`
        const beach5forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${beachWxArr[4]},&appid=${apiKey}`
        
        // Using await promise.all was not working during first build so stringing along promises for the axios calls
      
        axios.get(beach1forecast) 
            .then((response) => {
                this.setState({
                    forecast1: response.data
                })
                return axios.get(beach2forecast)
                .then((response) => {
                    this.setState({
                        forecast2: response.data
                    })
                    return axios.get(beach3forecast)
                    .then((response) => {
                        this.setState({
                            forecast3: response.data
                        })
                        return axios.get(beach4forecast)
                        .then((response) => {
                            this.setState({
                                forecast4: response.data
                            })
                            return axios.get(beach5forecast)
                            .then((response) => {
                                this.setState({
                                    forecast5: response.data
                                })
                            })
                        })
                    })
                })
                
            }).catch(err => {console.log(`Error retrieving forecast: ${err}`)})    
     
    }
        

    render() {

        if (this.state.forecast1 === null) {
            return null
        } else if (this.state.forecast2 === null) {
            return null
        } else if (this.state.forecast3 === null) {
            return null
        } else if (this.state.forecast4 === null) {
            return null
        } else if (this.state.forecast5 === null) {
            return null
        } else {
        

        return (
            
                
            <div className="beachForecastContainer container-fluid"> 

                <h1>5-Day Forecasts:</h1>

                <div className="beachForecast">
                    <div className="beachName">{this.state.forecast1.city.name}</div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast1.list[0].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast1.list[0].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast1.list[0].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast1.list[8].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast1.list[8].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast1.list[8].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast1.list[16].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast1.list[16].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast1.list[16].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast1.list[24].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast1.list[24].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast1.list[24].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast1.list[32].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast1.list[32].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast1.list[32].main.temp)}F</span>
                    </div>
                </div> 
                <div className="beachForecast">
                    <div className="beachName">{this.state.forecast2.city.name}</div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast2.list[0].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast2.list[0].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast2.list[0].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast2.list[8].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast2.list[8].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast2.list[8].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast2.list[16].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast2.list[16].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast2.list[16].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast2.list[24].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast2.list[24].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast2.list[24].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast2.list[32].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast2.list[32].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast2.list[32].main.temp)}F</span>
                    </div>
                </div>
                <div className="beachForecast">
                    <div className="beachName">{this.state.forecast3.city.name}</div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast3.list[0].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast3.list[0].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast3.list[0].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast3.list[8].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast3.list[8].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast3.list[8].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast3.list[16].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast3.list[16].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast3.list[16].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast3.list[24].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast3.list[24].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast3.list[24].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast3.list[32].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast3.list[32].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast3.list[32].main.temp)}F</span>
                    </div>
                </div>
                <div className="beachForecast">
                    <div className="beachName">{this.state.forecast4.city.name}</div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast4.list[0].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast4.list[0].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast4.list[0].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast4.list[8].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast4.list[8].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast4.list[8].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast4.list[16].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast4.list[16].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast4.list[16].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast4.list[24].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast4.list[24].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast4.list[24].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast4.list[32].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast4.list[32].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast4.list[32].main.temp)}F</span>
                    </div>
                </div>
                <div className="beachForecast">
                    <div className="beachName">{this.state.forecast5.city.name}</div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast5.list[0].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast5.list[0].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast5.list[0].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast5.list[8].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast5.list[8].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast5.list[8].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast5.list[16].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast5.list[16].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast5.list[16].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast5.list[24].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast5.list[24].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast5.list[24].main.temp)}F</span>
                    </div>
                    <div className="beachDayBox"><img src={`https://openweathermap.org/img/wn/${this.state.forecast5.list[32].weather[0].icon}.png`} alt="Wx Icon"></img>
                    <br/>
                    <span>{this.state.forecast5.list[32].weather[0].description.toUpperCase()}</span>
                    <br/>
                    <span>Temp: {kelvinConverter(this.state.forecast5.list[32].main.temp)}F</span>
                    </div>
                </div>
                
            </div>
        )
    }
}
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(BeachFiveForecast)
