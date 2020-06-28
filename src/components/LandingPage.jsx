import React, { Component } from 'react'
import Carousel from './Carousel';
import './styles/LandingPage.css';


class LandingPage extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            zip: '',
            lat: '',
            lng: '',
        }
    }

    render() {
        return (
            <div>
               <Carousel />
               <div className="zipCodeForm">
                <form>
                    <div className="form-row">
                        <div className="col-12">
                        <input type="text" className="form-control" placeholder="Enter ZipCode and hit enter - Or simply click buttons for auto-location-finding" />
                        </div>
                    </div>
                </form>
               </div>
                <div className="inputButtons">
                    <button type="button" className="btn btn-outline-info btn-lg">Local Weather</button>
                    <button type="button" className="btn btn-outline-warning btn-lg">Plz BEACH ME!</button>
                </div>
            </div>
        )
    }
}

export default LandingPage;
