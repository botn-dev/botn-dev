import React, {Component} from "react";
import ls from 'local-storage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./ApplicationView.css";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home.js";
import Contact from "../Contact/Contact.js";
import Partners from "../Partners/Partners.js";
import Services from "../Services/Services.js";
import Photos from "../Photos/Photos.js";
import Footer from "../Footer/Footer.js";



class ApplicationView extends Component {
    state = {
        page: "/"
    }

    componentDidMount = () => {
        let thisPage = ls.get("page")
        if (thisPage !== null) {
            this.setState({ page: thisPage})
        }
    }

    setPage = (newPage) => {
        ls.set("page", newPage)
        this.setState({ page: newPage})
    }

    showPage() {
        if (this.state.page === "/") {
            return <Home history={this.state.page}/>
        } else if (this.state.page === "/Contact") {
            return <Contact />
        } else if (this.state.page === "/Services") {
            return <Services />
        } else if (this.state.page === "/Photos") {
            return <Photos />
        } else if (this.state.page === "/Partners") {
            return <Partners />
        }
    }

    render() {
        return (
                <React.Fragment>
                    <Router>
                        <Navbar setPage={this.setPage} currentPage={this.state.page}/>
                        <div className="App">
                            <div className="main-body body-full">
                                {this.showPage()}
                            </div>
                        </div>
                        <Footer />
                    </Router>
                </React.Fragment>
        )
    }
}

export default ApplicationView;
