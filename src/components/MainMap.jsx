import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import { timeConverter } from '../utilities';
import BeachFiveForecast from './BeachFiveForecast';
import Footer from './Footer';
import Header from './Header';
import './styles/MainMap.css'
import axios from 'axios';





class MainMapContainer extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            isLoading: true,
            beaches: []
        }

    }

    componentDidMount() {

        axios.post('/api/v1/get-trips', {
            reduxLat: this.props.latitude,
            reduxLng: this.props.longitude,
            searchBeaches: this.props.searchBeaches
        })
            .then(response => {
                console.log(response)
                this.setState({
                    beaches: response.data.data
                })
                this.props.addBeaches({
                    beaches: response.data.data
                })
            })
  
    }

    // Checking if the state has updated & resetting isLoading value   
    componentDidUpdate(prevProps, prevState, snapShot) {
        if (this.state.beaches !== prevState.beaches) {
            this.setState({
                isLoading: false
            })
        }
    }


    render() {
       
            
        return (

            
            <React.Fragment>
                <Header />
                
            {/* Added a GoogleMaps API driving-directions/desitnation search API call to our mapping of beaches in state below. When I can get my data structured better, I can template in the lat/long instead of just the beach/city name, as this will likely bug-out on occasion */}
            <div className="beachDurations container-fluid">
                <h2><span>Click for directions to - <br/>Your Nearest Beaches: {this.state.beaches.map((beach, i) => <div key={i}><a style={{color:'red'}} target='_blank' rel='noopener noreferrer' href={`https://www.google.com/maps/dir/?api=1&origin=${this.props.latitude},${this.props.longitude}&destination=${beach.name}&travelmode=driving`}>{beach.name}</a> - {timeConverter(beach.dur)}</div>)} </span></h2>
                
            </div>
            <div className="forecastContainer container-fluid">
               
                {/* Wrapping the rendering of our Forecast component in conditional to check the isLoading proer*/}
              { !this.state.isLoading && (<BeachFiveForecast fiveBeaches={this.state.beaches} />) }

            </div>
            <Footer />
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBeaches: (payload) => {
            return dispatch({ type: 'ADD_BEACHES', payload })
        }
    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
    libraries: ['places'],
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MainMapContainer));
