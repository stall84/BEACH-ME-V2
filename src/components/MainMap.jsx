import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
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

        }

    }

    componentDidMount() {
        console.log('MainMap Mounting...')    

        const { google } = this.props
        console.log(google)
    
        let origins = [`${this.props.latitude},${this.props.longitude}`]
        let destinations = ['30.17,-85.80', '32.66,-79.93', '32.17,-80.74', '25.81,-80.13']
        let travelMode = 'DRIVING'

        const distService = new this.props.google.maps.DistanceMatrixService()
        

        distService.getDistanceMatrix({origins, destinations, travelMode}, (res,status) => {
            if (status === 'OK') {
                var dists = res.rows[0].elements
                var distArr = []
                for (var i = 0; i < dists.length; i++) {               
                    distArr.push(dists[i].duration.value)       
                }
                console.log(distArr)     
            } else {
                console.log(status)
            }
            console.log(distArr[1])
                  
        })

        

       
    
    
    
    }

//     getPlaces = (mapProps, map) => {
//         const {google} = this.props
//         const placeSearch = new google.maps.places.PlacesService(map)

//         let location = {
//             lat: 33.79,
//             lng: -84.35
//         }
//         let radius = '5000'
//         let type = ['bowling_alley']
     
//         placeSearch.nearbySearch({ location, radius, type }, (res,status) => {

//             if (status === 'OK') {
//                 for (let i=0; i < res.length; i++) {
//                 console.log(res[i].name)
//             }
//             } else {
//                 console.log(`Error incurred in place-search: ${status}`)
//             }
//         })

// }


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
        <span>Users Lat: {this.props.latitude}</span>
        <span>Users Long: {this.props.longitude}</span>
                <BeachFiveForecast />
            </div>
         
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}


export default connect(mapStateToProps)(GoogleApiWrapper({
    libraries: ['drawing','places'],
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MainMapContainer));
