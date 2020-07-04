import React, { Component } from 'react';
import './styles/Header.css'

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <header>
                <div>
                    <nav id="navBar" className="navbar navbar-light">
                       
                        BEACH-ME
                        
                       
                    </nav>
                </div>
            </header>
        )
    }

}

export default Header