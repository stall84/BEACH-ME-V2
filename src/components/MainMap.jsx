import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import BeachFiveForecast from './BeachFiveForecast';
import './styles/MainMap.css'




const mapStyles = {
    marginTop:'2rem',
    width: '80%',
    height: '80%'
}


class MainMapContainer extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            beaches: [
                {
                    beach1: ''
                },
                {
                    beach2: ''
                },
                {
                    beach3: ''
                }
            ]
        }

    }

    componentDidMount() {
        console.log('MainMap Mounting...')    

        const { google } = this.props
        console.log(google)
    
        let origins = ['33.79,-84.35']
        let destinations = ['30.17,-85.80']
        let travelMode = 'DRIVING'

        const distService = new this.props.google.maps.DistanceMatrixService()
        

        distService.getDistanceMatrix({origins, destinations, travelMode}, (res,status) => {
            if (status === 'OK') {
                console.log(res)
            } else {
                console.log(status)
            }
                  
        })

        

       
    
    
    
    }

    getPlaces = (mapProps, map) => {
        const {google} = this.props
        const placeSearch = new google.maps.places.PlacesService(map)

        let location = {
            lat: 33.79,
            lng: -84.35
        }
        let radius = '5000'
        let type = ['bowling_alley']
     
        placeSearch.nearbySearch({ location, radius, type }, (res,status) => {

            if (status === 'OK') {
                for (let i=0; i < res.length; i++) {
                console.log(res[i].name)
            }
            } else {
                console.log(`Error incurred in place-search: ${status}`)
            }
        })

}


    render() {
        

       
    
        
    
            
        return (

            
            <React.Fragment>
        <div className="mainContainer">    
            <div className="mapContainer">
                <Map 
                    google={this.props.google}
                    zoom={9}
                    onReady={this.getPlaces}
                    style={mapStyles}
                    initialCenter={{ lat:33.79, lng: -84.35 }}
                    
                >
                    <Marker />

             
                </Map>               
            </div>
        </div> 
            <div className="forecastContainer">
                <BeachFiveForecast />
            </div>
         
            </React.Fragment>
        )
    }
}



export default GoogleApiWrapper({
    libraries: ['drawing','places'],
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MainMapContainer);
