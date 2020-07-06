import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import './styles/LandingPage.css';


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
             
             // This method of pushing the user's lat/long into state is working during 
             // initial tests. Things I've found online though make me think it's an async call
             // and might need some other proving logic other than the if statement at very beginning 
             this.setState({
                 lat: position.coords.latitude,
                 lng: position.coords.longitude
             })
                
        
       });
    }
    }

    render() {
        return (
            <div>
                <div className="headerCont">
                    <Header />
                </div>
                <Carousel />
                
                <div className="inputButtons">
                    <Link to="/main-map"><button type="button" className="btn btn-outline-warning" style={{fontSize: '5rem'}}>PLZ BEACH ME!</button></Link>
                </div>
                <Footer style={{fontSize: '12px;'}} />
            </div>
        )
    }
}

// Setting up React-Redux mappings (state/props)



 const mapDispatchToProps = dispatch => {
    return {
        addCoords: (payload) => {
            return dispatch({ type: 'ADD_COORDS', payload })
        }
    }
}

export default connect(null, mapDispatchToProps)(LandingPage);
