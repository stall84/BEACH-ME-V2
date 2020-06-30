import React, { Component } from 'react';
import { connect } from 'react-redux';


class Forecaster extends Component {
    
    
    
    
    
    render() {


        return (
            <div>
                
                <h2>Your Geo-Coords: </h2>
                    <span>Lat: {this.props.latitude}</span>
                    <span>Lng: {this.props.longitude}</span>
                
                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Forecaster);
