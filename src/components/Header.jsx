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
                       
                        <img src="/images/Beach-Me-Logo-2.png" width="180" height="60" className="d-inline-block align-top" alt="" />
                        
                       
                    </nav>
                </div>
            </header>
        )
    }

}

export default Header