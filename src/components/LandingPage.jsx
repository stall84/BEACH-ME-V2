import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import "./styles/LandingPage.css";
import axios from "axios";
import Geocode from "react-geocode";

// Setup CSS using makeStyles Hook from Material UI

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      geocodeForm: null,
      convertedCoords: null,
    };
  }

  inputAddressValueRef = React.createRef();

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.props.addCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        // After loading user's lat/lng into redux state above, we send an axios POST request up to our server
        // with those same exact values. These will go directly into a mongoDB geoNear method to determine which beaches
        // in the database are closest to our user.
        axios
          .post("https://mes-personal-site.herokuapp.com/api/v1/beaches", {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          .then((response) => {
            console.log("Response from POST call to backend: ", response);
            // Take the back-end's list of closest beaches and store it in Redux
            this.props.addSearchBeaches({
              searchBeaches: response.data.data,
            });
          })
          .catch((error) => {
            console.log("Error posting coords: ", error);
          });
      });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.lat !== prevState.lat) {
      axios
        .post("https://mes-personal-site.herokuapp.com/api/v1/beaches", {
          lat: this.state.lat,
          lng: this.state.lng,
        })
        .then((response) => {
          console.log("** - Response from POST call to backend: ", response);
          // Take the back-end's list of closest beaches and store it in Redux
          this.props.addSearchBeaches({
            searchBeaches: response.data.data,
          });
        })
        .then(() => {
          this.props.history.push("/main-map");
        })
        .catch((error) => {
          console.log("Error posting coords: ", error);
        });
    }
  }

  // Using geocode node module we're going to first configure with google api key and language. then run the fromAddress method to take
  // Users address or zip and convert it to lat/lng to be stored into state/redux
  geocode = (inputAddy) => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
    Geocode.setLanguage("en");
    Geocode.fromAddress(inputAddy)
      .then((response) => {
        let { lat, lng } = response.results[0].geometry.location;
        console.log("HandleSubmit Geocode response: ", response);
        // Add geocoder returned lat/lng to redux state and local state
        this.props.addCoords({
          latitude: lat,
          longitude: lng,
        });
        this.setState({
          lat: lat,
          lng: lng,
        });
      })
      .catch((err) => console.log("Error in HandleSubmit Geocode: ", err));
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault(); // On button click prevent default behavior, fire off geocode method with local state's address/zip,etc
    let addyRefVal = this.inputAddressValueRef.current.value;
    this.geocode(addyRefVal);
  };

  handleInput = (event) => {
    this.setState({
      // Take form's text input of city/zip/address and immediately store in local state
      geocodeForm: event.target.value,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="headerCont">
          <Header />
        </div>

        <Carousel />

        <h2>Click below to get BEACHED!</h2>
        <div className="inputButtons">
          <Link to="/main-map">
            <button type="button" className="btn btn-outline-warning btn-lg">
              PLZ BEACH ME!
            </button>
          </Link>
        </div>
        <div>
          <form
            onSubmit={this.handleSubmit}
            style={{ textAlign: "center", marginBottom: "10rem" }}
          >
            <input
              id="altInputForm"
              style={{ fontFamily: "Arial", textAlign: "center" }}
              type="text"
              placeholder="City or Zipcode"
              ref={this.inputAddressValueRef}
            />
            <div id="altAddyButton">
              <button
                style={{
                  fontSize: "22px",
                  width: "300px",
                  height: "70px",
                  textAlign: "center",
                }}
                type="submit"
              >
                Anonymous-Beach-Me-by-Addy
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

// Setting up React-Redux mappings (state/props)
// addCoords will take the returns from either user's allowing browser built-in navigator geolocation lat/lng OR
// form-entered address/zip, etc and store them to the Redux state via reducer in index.js. Then, after the post request is sent up
// to the backend, our backend will return the list of closest beaches found in our mongoDB database, and will store those to Redux state
// via addSearchBeaches prop

const mapDispatchToProps = (dispatch) => {
  return {
    addCoords: (payload) => {
      return dispatch({ type: "ADD_COORDS", payload });
    },
    addSearchBeaches: (payload) => {
      return dispatch({ type: "ADD_SEARCH_BEACHES", payload });
    },
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
