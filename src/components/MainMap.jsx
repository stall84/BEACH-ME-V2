import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import { timeConverter } from '../utilities';
import { beachList, nameArray } from '../beaches';
import BeachFiveForecast from './BeachFiveForecast';
import Header from './Header';
import './styles/MainMap.css'





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
        const { latitude, longitude } = this.props
        console.log('Logging Lat/Lng from Redux: ', latitude, longitude)
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
                
            {/* Added a GoogleMaps API desitnation search API call to our mapping of beaches in state below. When I can get my data structured better, I can template in the lat/long instead of just the beach/city name, as this will likely bug-out on occasion */}
            <div className="beachDurations">
                <h2><span>Nearest Beaches: {this.state.beaches.map((beach) => <div><a href={`https://www.google.com/maps/dir/?api=1&destination=${beach.name}&travelmode=driving`}>{beach.name}</a> - {timeConverter(beach.dur)}</div>)} </span></h2>
                
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
