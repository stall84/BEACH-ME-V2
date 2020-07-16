import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import './styles/LandingPage.css';
import axios from 'axios';


class LandingPage extends Component {

    constructor(props) {
        super(props) 

        this.state = {
          lat: null,
          lng: null
        }
    }

    componentDidMount () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                
                console.log(position)
                this.props.addCoords({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
                // After loading user's lat/lng into redux state above, we send an axios POST request up to our server
                // with those same exact values. These will go directly into a mongoDB geoNear method to determine which beaches 
                // in the database are closest to our user. 
                axios.post('/api/v1/beaches', {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
                    .then((response) => {
                    console.log('Response from POST call to backend: ', response)
                    this.props.addSearchBeaches({
                        searchBeaches: response.data.data
                    })
                })
                    .catch(error => {
                        console.log('Error posting coords: ', error)
                    })

             
             // This method of pushing the user's lat/long into state is working during 
             // initial tests. Things I've found online though make me think it's an async call
             // and might need some other proving logic other than the if statement at very beginning 
            //  this.setState({
            //      lat: position.coords.latitude,
            //      lng: position.coords.longitude
            //  })
                
        
       });
    }
    }

    // componentDidUpdate(prevState) {
       
    //     if (this.state !== prevState) {
    //         console.log('State updated.. ')
    //             // let origins = {
    //             //     lat: this.state.lat,
    //             //     lng: this.state.lng
    //             // };
    //             let lat = this.state.lat;
    //             let lng = this.state.lng;
                

    //     }
    //   }

 

    render() {
        return (
            <div className="container-fluid">
                <div className="headerCont">
                    <Header />
                </div>

                <Carousel />

                <h2>Click below to get BEACHED!</h2>
                <div className="inputButtons">
                    <Link to="/main-map"><button type="button" className="btn btn-outline-warning btn-lg">PLZ BEACH ME!</button></Link>
                    
                </div>
                <Footer />
            </div>
        )
    }
}

// Setting up React-Redux mappings (state/props)



 const mapDispatchToProps = dispatch => {
    return {
        addCoords: (payload) => {
            return dispatch({ type: 'ADD_COORDS', payload })
        },
        addSearchBeaches: (payload) => {
            return dispatch({ type: 'ADD_SEARCH_BEACHES', payload })
        }
    }
}

export default connect(null, mapDispatchToProps)(LandingPage);
