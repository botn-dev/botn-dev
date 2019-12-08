import React, { Component } from "react";
import logo from "../../Images/betterOptionsLogo.png";
import "./Partners.css";
import background from "../../Images/backgroundComm.jpg";
import fcc from "../../Images/fccLogo.jpg";
import oneGen from "../../Images/oneGenLogo.png";
import graceWorks from "../../Images/graceworksLogo.png";
import vandy from "../../Images/vandyLogo.png";



const partners = [
    {
        "name": "Franklin Community Church",
        "description": [{"style": [["text-align", "center"], ["color", "black"], ["font-weight", "400"]], "text": "Franklin Community Church’s purpose is to enable Middle Tennesseans to experience  authentic relationships with God and each other by establishing an Acts 2 biblical community. We are a relationship driven church. We live by the motto, “The way you love a God you cannot see is by loving those you can see. The way you serve a God you cannot see is by serving those you can see.” Ministry is in our DNA. Especially ministering to those who are on the margins of society. We feel a call to be a multi-ethnic church going into the difficult places to reach those who feel hopeless. Our desire is to be a conscience of the community."}],
        "street": "254 Natchez Street",
        "city": "Franklin, Tennessee 37064",
        "phone": "(615)440-7553",
        "email": "Kevin@FranklinCommunityChurch.org",
        "website": "https://franklincommunitychurch.org/",
        "logo": fcc
    },
    {
        "name": "One Generation Away",
        "description": [
            {"style": [["text-align", "center"], ["color", "black"], ["font-weight", "400"]], "text": "OneGenAway is a non-profit 501(c)3 that works to bring fresh, healthy food right to people in need. We strive to eliminate food deserts in the low income neighborhoods in America."},
            {"style": [["text-align", "center"], ["color", "black"], ["font-weight", "400"]], "text": "Food deserts are defined as parts of the country where citizens lack access to fresh fruit, vegetables, and other healthy whole foods due to lack of grocery stores, lack of transportation, and economic hardship."},
            {"style": [["text-align", "center"], ["color", "black"], ["font-weight", "400"]], "text": "We serve the home-bound elderly, school children, the working poor of our country, and more."}
        ],
        "street": "104 Southeast Pkwy #300",
        "city": "Franklin, TN 37064",
        "phone": "(615)538-7413",
        "email": "contactus@onegenaway.com",
        "website": "https://www.onegenaway.com",
        "logo": oneGen
    },
    {
        "name": "Vanderbilt Kennedy Center",
        "description": [
            {"style": [["text-align", "left"], ["color", "black"], ["font-weight", "400"]], "text": "The Vanderbilt Kennedy University Center for Excellence in Developmental Disabilities (UCEDD) provides a variety of services and programs for individuals with disabilities of all ages and their families, for professionals, and the community. Many services are integrated with research and training."},
            {"style": [["text-align", "center"], ["color", "black"], ["font-weight", "400"]], "text": "Navigating service systems can be complicated. If you need help finding services, call Tennessee Disability Pathfinder for free information and referral, 615-322-8529 or toll-free 1-800-640-4636."}
                    ],
        "street": "110 Magnolia Circle",
        "city": "Nashville, TN 37203",
        "phone": "(615)322-8240",
        "email": "kc@vumc.org",
        "website": "https://vkc.mc.vanderbilt.edu/vkc/",
        "logo": vandy
    },
    {
        "name": "GraceWorks Ministries",
        "description": [
            {"style": [["text-align", "center"], ["color", "black"], ["font-size", "20px"], ["font-weight", "bold"]], "text": "Our Mission:"},
            {"style": [["text-align", "center"], ["color", "black"], ["font-weight", "400"]], "text": "Neighbor serving Neighbor, by the power of God’s grace."},
            {"style": [["text-align", "center"], ["color", "black"], ["font-size", "18px"], ["font-weight", "bold"]], "text": "Our Core Values:"},
            {"style": [["width", "80%"], ["margin", "auto"], ["text-align", "left"], ["color", "black"], ["display", "list-item"], ["list-style-type", "disc"], ["list-style-position", "inside"], ["font-weight", "400"]], "text": "Christ-likeness in both our attitudes and behavior"},
            {"style": [["width", "80%"], ["margin", "auto"], ["text-align", "left"], ["color", "black"], ["display", "list-item"], ["list-style-type", "disc"], ["list-style-position", "inside"], ["font-weight", "400"]], "text": "Connecting through mutual respect, empathy, and kindness"},
            {"style": [["width", "80%"], ["margin", "auto"], ["text-align", "left"], ["color", "black"], ["display", "list-item"], ["list-style-type", "disc"], ["list-style-position", "inside"], ["font-weight", "400"]], "text": "Cultivating Hope by offering assistance and encouragement"},
            {"style": [["width", "80%"], ["margin", "auto"], ["text-align", "left"], ["color", "black"], ["display", "list-item"], ["list-style-type", "disc"], ["list-style-position", "inside"], ["font-weight", "400"]], "text": "Creating Community by investing in our neighbors through service"}
                    ],
        "street": "104 Southeast Parkway, Suite 100",
        "city": "Franklin, TN 37064",
        "phone": "(615)794-9055",
        "email": "info@graceworksministries.net",
        "website": "https://www.graceworksministries.net/",
        "logo": graceWorks
    }
]
class Partners extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    showParagraphs(name, partner) {
        let count = 0
        let descriptionPartner = []
        partner.forEach(par => {
            count += 1
            let styleList = {}
            par.style.forEach(option => {
                if (option[0] === "text-align") {
                    styleList["text-align"] = option[1]
                } else if (option[0] === "color") {
                    styleList["color"] = option[1]
                } else if (option[0] === "font-size") {
                    styleList["fontSize"] = option[1]
                } else if (option[0] === "font-weight") {
                    styleList["fontWeight"] = option[1]
                } else if (option[0] === "display") {
                    styleList["display"] = option[1]
                } else if (option[0] === "list-style-type") {
                    styleList["listStyleType"] = option[1]
                } else if (option[0] === "list-style-position") {
                    styleList["listStylePosition"] = option[1]
                } else if (option[0] === "width") {
                    styleList["width"] = option[1]
                } else if (option[0] === "margin") {
                    styleList["margin"] = option[1]
                }
            })
            let indivPar = <p className="partner-paragraph-small" style={styleList} key={name + "s" + count.toString()}>{par.text}</p>
            let bigPar = <p className="partner-paragraph" key={name + count.toString()}>{par.text}</p>
            descriptionPartner.push(indivPar)
            descriptionPartner.push(bigPar)
        })
        return descriptionPartner
    }

    showPartners() {
        let count = 0
        return partners.map(partner => {
            if (count % 2 === 0) {
                count += 1
                let mailSite = "mailto: " + partner.email
                return <a className="indiv-partner-left" href={partner.website} target="blank">
                            <div className="partner-row-left">
                                <section className="title-logo">
                                    <h1 className="partner-name">{partner.name}</h1>
                                    <section className="partner-address-div">
                                        <article className="partner-address-indiv">
                                            <h2 className="partner-address">{partner.street}</h2>
                                            <h2 className="partner-address">{partner.city}</h2>
                                            <h2 className="partner-address">{partner.phone}</h2>
                                        </article>
                                        <a className="partEmail" href={mailSite}><img className="partner-email" src={require("../../Images/email.png")} alt="Email" /></a>
                                    </section>
                                </section>
                                <img src={partner.logo} alt={partner.name} className="partner-logo-right" />
                            </div>
                            <div className="partner-description">
                                {this.showParagraphs(partner.name, partner.description)}
                            </div>
                        </a>
            } else {
                count += 1
                let mailSite = "mailto: " + partner.email
                return <a className="indiv-partner-right" href={partner.website} target="blank">
                            <div className="partner-row-right">
                                <img src={partner.logo} alt={partner.name} className="partner-logo-left" />
                                <section className="title-logo">
                                    <h1 className="partner-name">{partner.name}</h1>
                                    <section className="partner-address-div">
                                        <a className="partEmail" href={mailSite}><img className="partner-email" src={require("../../Images/email.png")} alt="Email" /></a>
                                        <article className="partner-address-indiv">
                                            <h2 className="partner-address">{partner.street}</h2>
                                            <h2 className="partner-address">{partner.city}</h2>
                                            <h2 className="partner-address">{partner.phone}</h2>
                                        </article>
                                    </section>
                                </section>
                            </div>
                            <div className="partner-description">
                                {this.showParagraphs(partner.name, partner.description)}
                            </div>
                        </a>
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div id="main-contact-div">
                    <img id="background-contact" src={background} alt="background" />
                    <div className="services-partners-div">
                        {this.showPartners()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Partners;