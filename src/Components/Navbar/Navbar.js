import React, {Component, addons} from "react";
import logo from "../../Images/betterOptionsLogo.png";
import photo1 from "../../Images/backpack14.jpg";
import "./Navbar.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class Navbar extends Component {
    state = {
        visible: false
    }

    hideNavbar() {
        ReactDOM.findDOMNode(this.refs.showBtn).setAttribute("id", "fadeIn")
        ReactDOM.findDOMNode(this.refs.hideBtn).setAttribute("id", "fadeOut")
        ReactDOM.findDOMNode(this.refs.navlinks).setAttribute("id", "fadeOut")
        let links = ReactDOM.findDOMNode(this.refs.navlinks)
        links.setAttribute("display", "none")
    }

    showNavbar() {
        ReactDOM.findDOMNode(this.refs.showBtn).setAttribute("id", "fadeOut")
        ReactDOM.findDOMNode(this.refs.hideBtn).setAttribute("id", "fadeIn")
        ReactDOM.findDOMNode(this.refs.navlinks).setAttribute("id", "fadeInNavLinks")
    }

    showPage() {
        let pages = [
                        {"name": "Home", "path": "/"},
                        // {"name": "Services", "path": "/Services"},
                        {"name": "Photos", "path": "/Photos"},
                        {"name": "Partners", "path": "/Partners"},
                        {"name": "Contact", "path": "/Contact"}
                    ]
        return pages.map(page => {
            if (this.props.currentPage === page.path) {
                return <h1 className="navbar-link-active" key={page.name} ref="indivNavlinks" onClick={() => this.props.setPage(page.path)}>{page.name}</h1>
            } else {
                return <h1 className="navbar-link" key={page.name} ref="indivNavlinks" onClick={() => this.props.setPage(page.path)}>{page.name}</h1>
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div id="navtitle-div">
                    <h1 id="navbar-title">Better Options TN</h1>
                    <img id="page-logo" src={logo} alt="Better Options TN" />
                    <div id="navbar" ref="navbar" >
                        <ul id="navlinks" ref="navlinks" >
                        <Router>
                            {this.showPage()}
                        </Router>
                        </ul>
                        <h1 id="fadeIn" ref="hideBtn" onClick={() => this.hideNavbar()}><i className='fas fa-caret-up'></i></h1>
                        <h1 id="fadeOut" ref="showBtn" onClick={() => this.showNavbar()}><i className='fas fa-caret-down'></i></h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;
