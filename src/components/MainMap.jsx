import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
import { shortestTrips, timeConverter } from '../utilities';
import { beachList, nameArray } from '../beaches';
import BeachFiveForecast from './BeachFiveForecast';
import BeachTripTimes from './BeachTripTimes';
import Header from './Header';
import './styles/MainMap.css'




const mapStyles = {
    marginTop:'2rem',
    width: '80vw',
    height: '80vh'
}


class MainMapContainer extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            beaches: []
        }

    }

    componentDidMount() {
        console.log('MainMap Mounting...')    

        const { google } = this.props
        console.log(google)
    
        let origins = [`${this.props.latitude},${this.props.longitude}`]
        let destinations = []
        beachList.forEach(beach => {
            destinations.push(`${beach.lat},${beach.lng}`)
        })       
        let travelMode = 'DRIVING'

        const distService = new this.props.google.maps.DistanceMatrixService()
        

        distService.getDistanceMatrix({origins, destinations, travelMode}, (res,status) => {
            if (status === 'OK') {
                console.log(destinations)
                console.log('Respnse: ', res)
                console.log('Beach Names Arr: ', nameArray)
                
                var dists = res.rows[0].elements
                
                console.log('Dists: ', dists)
                // console.log('Dists2: ', dists2)
                var distArr = []
                for (var i = 0; i < dists.length; i++) {               
                    distArr.push(dists[i].duration.value)       
                }
                console.log(distArr)     
            } else {
                console.log(status)
            }
                // Here we are merging the trip duration array returned from distance matrix and transposing those times onto 
                // our beachList array we've hardcoded.
            const mergedArray = nameArray.map((beach, i) => ({name:beach, dur:distArr[i]}))
            console.log('Merged Array: ', mergedArray)
            console.log('Sorted Arr: ', mergedArray.sort((a,b) => Object.values(a)[0] - Object.values(b)[0]))
                // Here we're sorting the mergedArray ascending by the objects values (duration in seconds in this case)
            const sortedArray = mergedArray.sort(function (a,b) { return a.dur - b.dur} )
            console.log('New Sorted Arr: ', sortedArray)
                // Taking the first 5 closest beaches to user
            const beachDurations = sortedArray.splice(0,5)
            console.log('Beach Duration array: ', beachDurations)
                // Setting the 5 closest beaches to user into state 
            this.setState({
                beaches: beachDurations
            })
            
   
                  
        })

        

       
    
    
    
    }


    render() {
       
            
        return (

            
            <React.Fragment>
                <Header />
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

            <div className="beachDurations">
        <h2><span>Nearest Beaches: {this.state.beaches.map((beach) => <div>{beach.name} - {timeConverter(beach.dur)}</div>)} </span></h2>
                
            </div>
            <div className="forecastContainer">

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
