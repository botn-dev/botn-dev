import React, {Component} from "react";
import "./Home.css";
import img1 from "../../Images/backpack53.jpg";
import img2 from "../../Images/backpack3.jpg";
import img3 from "../../Images/MG2.JPG";
import img4 from "../../Images/backpack48.jpg";
import img5 from "../../Images/backpack17.jpg";
import img6 from "../../Images/MG3.JPG";
import img7 from "../../Images/backpack52.jpg";
import img8 from "../../Images/backpack27.jpg";
import img9 from "../../Images/backpack33.jpg";
import img10 from "../../Images/MG4.JPG";
import img11 from "../../Images/backpack58.jpg";

let photos = [
    [img1, "Enjoying a Better Options TN community event."],
    [img2, "Volunteers are the wheels that keep us moving."],
    [img3, "The venue before our 1st Opera Fundraiser."],
    [img4, "Young men enjoying our Back to School Bash"],
    [img5, "Partnering with local churches helps everyone involved."],
    [img6, "Some of our staff at our Opera Fundraiser."],
    [img7, "Enjoying some shade on a hot summer day."],
    [img8, "Popsicles make any hot day better."],
    [img9, "Founder, Luis Sura, speaking about Better Options TN."],
    [img10, "Thanks to the patrons of our Opera Fundraiser."],
    [img11, "Great turnout for our Backpack Giveaway."]
]

let backgroundImage = require("../../Images/background.jpg")
let bullets = [
    require("../../Images/Mentoring.png"),
    require("../../Images/lifeCoach.png"),
    require("../../Images/legal.png"),
    require("../../Images/house.png"),
    require("../../Images/translate.png")
]

class Home extends Component {
    state = {
        position: 0,
        scrollImages: true
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    changePic = () => {
        let temp = photos.length - 1
        if (this.state.position === temp) {
            this.setState({position: 0})
        } else {
            this.setState({position: this.state.position + 1})
        }
    }



    scrollPics = () => {
        if (this.state.scrollImages === true && this.props.history === "/") {
            setTimeout(() => this.changePic(), 5000)
            let tempPhoto = photos[this.state.position][0]
            let tempText = photos[this.state.position][1]
            return  <React.Fragment>
                        <div className="main-home-div">
                            <div className="left-home-div">
                                <h2 className="home-text">Better Options TN exists to help people of all nationalities and engage them in a way that is beneficial for all cultures.</h2>
                                <h2 className="home-text-smaller">We Proudly Provide</h2>
                                <section className="home-bullet"><img className="bullet-image" src={bullets[0]} alt="Mentoring"></img><h2 className="home-bullet-text">Mentoring</h2></section>
                                <section className="home-bullet"><img className="bullet-image" src={bullets[1]} alt="Life Coaching"></img><h2 className="home-bullet-text">Life Coaching</h2></section>
                                <section className="home-bullet"><img className="bullet-image" src={bullets[2]} alt="Legal Information"></img><h2 className="home-bullet-text">Legal Information</h2></section>
                                <section className="home-bullet"><img className="bullet-image" src={bullets[3]} alt="Housing Assistance"></img><h2 className="home-bullet-text">Housing and Rental Referrals</h2></section>
                                <section className="home-bullet"><img className="bullet-image" src={bullets[4]} alt="Translation Services"></img><h2 className="home-bullet-text">Translation and Interpretation Services</h2></section>
                            </div>
                            <div className="photo-div ">
                                <img className="photo-home appear disappear" src={tempPhoto} key={this.state.position} alt="Better Options Photo"/>
                                <h2 className="photo-caption appear disappear">{tempText}</h2>
                            </div>
                        </div>
                    </React.Fragment>
        }
    }

    render() {
        return (
                <div className="entire-home-div">
                    <img id="background-image" src={backgroundImage} alt="background"/>
                    {this.scrollPics()}
                    <div id="visionDiv">
                        <h2 id="homeTitle">Our Vision</h2>
                        <h3 id="visionStatement">Better Options TN is an organization created to assist people of all nationalities that come to live in Tennessee and to introduce them to the law of the land.</h3>
                    </div>
                </div>
        );
    }
}

export default Home;
