import React, {Component} from "react";
import logo from "../../Images/betterOptionsLogo.png";
import "./Footer.css";
import facebook from "../../Images/facebook.png";
import paypal from "../../Images/donate.png";


class Footer extends Component {

    render() {
        return (
                <React.Fragment>
                    <div className="footer-div">
                        <a href="https://www.facebook.com/better.optionstn.50" target="blank">
                            <img className="footer-image" src={facebook} alt="Facebook"/>
                        </a>
                        <h3 id="footer-name">Building strong families for a better community.</h3>
                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B9MYYBMV69EN8" target="blank">
                            <img className="footer-image" src={paypal} alt="Donate"/>
                        </a>
                    </div>
                </React.Fragment>
        );
    }
}

export default Footer;