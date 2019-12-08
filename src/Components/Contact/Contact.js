import React, { Component } from "react";
import logo from "../../Images/betterOptionsLogo.png";
import "./Contact.css";

let background = require("../../Images/backgroundFlags.jpg");


class Contact extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <React.Fragment>
                <div id="main-contact-div">
                    <img id="background-contact" src={background} alt="background"/>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe className="iframe-map" src="https://maps.google.com/maps?q=1338%20West%20Main%20Street%2C%20Franklin%2C%20TN%2037064&t=k&z=17&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe>
                        </div>
                    </div>
                    <div className="address-div">
                        <div id="addressInfo">
                            <h2 className="address-title">Better Options TN</h2>
                            <h2 className="address-line">1338 West Main Street</h2>
                            <h2 className="address-line">Franklin, TN 37064</h2>
                            <h2 className="address-line"><br></br></h2>
                            <h2 className="address-line">Email Us</h2>
                            <a href="mailto: betteroptionstn@gmail.com"><img id="emailIcon" src={require("../../Images/email.png")} alt="Email betteroptionstn@gmail.com" /></a>
                            <h2 className="address-line"><br></br></h2>
                            <h2 className="address-line-phone"><i id="contactFavicon" className="fas fa-phone" />(615) 472-8810</h2>
                            <h2 className="address-line-email"><i id="contactFavicon" className="far fa-envelope" />betteroptionstn@gmail.com</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;
