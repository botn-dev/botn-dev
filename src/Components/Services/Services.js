import React, { Component } from "react";
import logo from "../../Images/betterOptionsLogo.png";
import "./Services.css";

let background = require("../../Images/backgroundComm2.jpg");

class Services extends Component {

    render() {
        return (
                <React.Fragment>
                    <div id="main-contact-div">
                        <img id="background-contact" src={background} alt="background"/>
                        <div className="services-partners-div">
                            <h1>Services</h1>
                        </div>
                    </div>
                </React.Fragment>
        );
    }
}

export default Services;