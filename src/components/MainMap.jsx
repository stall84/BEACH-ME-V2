import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '86%',
    height: '86%'
}


class MainMapContainer extends Component {

    


    render() {
        return (
            <div className="MapHolder">
                <Map 
                    google={this.props.google}
                    zoom={9}
                    style={mapStyles}
                    initialCenter={{ lat:33.79, lng: -84.35 }}
                    
                >
                    <Marker />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    libraries: ['drawing','places'],
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MainMapContainer);
