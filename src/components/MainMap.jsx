import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import { timeConverter } from '../utilities';
import { beachList, nameArray } from '../beaches';
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
                console.log('Post request Made')
            })
    
        
        let origins = [`${this.props.latitude},${this.props.longitude}`]
        let destinations = []
        beachList.forEach(beach => {
            destinations.push(`${beach.lat},${beach.lng}`)
        })       
        let travelMode = 'DRIVING'

        // Instantiating Google's distance matrix service method which is made available on/by the GoogleAPIWrapper HOF 
        const distService = new this.props.google.maps.DistanceMatrixService()
        
        distService.getDistanceMatrix({origins, destinations, travelMode}, (res,status) => {
            if (status === 'OK') {
        
                // Create dists and distArr arrays to pick out numeric values from google's response
                var dists = res.rows[0].elements
                var distArr = []
                for (var i = 0; i < dists.length; i++) {               
                    distArr.push(dists[i].duration.value)       
                }
                    
            } else {
                console.log(status)
            }
        
                // Here we are merging the trip duration array returned from distance matrix and transposing those times onto 
                // our beachList array we've hardcoded.
            const mergedArray = nameArray.map((beach, i) => ({name:beach, dur:distArr[i]}))     
               
                // Here we're sorting the mergedArray ascending by the objects values (duration in seconds in this case)
            const sortedArray = mergedArray.sort(function (a,b) { return a.dur - b.dur} )  
                 
                // Taking the first 5 closest beaches to user
            const beachDurations = sortedArray.splice(0,5)           
                // Setting the 5 closest beaches to user into state 
            this.setState({
                beaches: beachDurations,               
            })
            // this is a placeholder for future Redux-store functionality 
            this.props.addBeaches({
                beaches: beachDurations             
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
                <h2><span>Click for directions to - <br/>Your Nearest Beaches: {this.state.beaches.map((beach, i) => <div key={i}><a style={{color:'red'}} target='_blank' rel='noopener noreferrer' href={`https://www.google.com/maps/dir/?api=1&destination=${beach.name}&travelmode=driving`}>{beach.name}</a> - {timeConverter(beach.dur)}</div>)} </span></h2>
                
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
