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
            forecast5: null,
        }
    }

    componentDidMount() {


        axios.post('/api/v1/get-weather', {
            fiveBeaches: this.props.fiveBeaches
        })
            .then(response => {
                console.log('CompDidMnt Axios Res: ', response)
                this.setState({
                    forecast1: response.data.data[0],
                    forecast2: response.data.data[1],
                    forecast3: response.data.data[2],
                    forecast4: response.data.data[3],
                    forecast5: response.data.data[4]
                })
            })
            .catch(error => console.log('There was an error: ', error))  
     
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
