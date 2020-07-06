import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css'

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Link to="/" style={{textDecoration:'none', color:'black'}}>
            <header className="container-fluid">
                <div>
                    <nav id="navBar" className="navbar navbar-light text-center">
                       
                        BEACH
                        <br/>
                        ME
                        
                       
                    </nav>
                </div>
            </header>
            </Link>
        )
    }

}

export default Header