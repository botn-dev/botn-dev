import React, {Component} from "react";
import logo from "../../Images/betterOptionsLogo.png";
import "./Photos.css";
import video from "../../Images/piano.mp4";

let background = require("../../Images/backgroundFlags.jpg");

const photos = [
    {
        "title": "Better Options TN Opera",
        "date": "September 22, 2018",
        "images": [
            require("../../Images/MG1.JPG"),
            require("../../Images/MG2.JPG"),
            require("../../Images/MG3.JPG"),
            require("../../Images/MG4.JPG"),
            require("../../Images/MG5.JPG"),
            require("../../Images/MG6.JPG"),
            require("../../Images/MG7.JPG"),
            require("../../Images/MG8.JPG"),
            require("../../Images/MG9.JPG"),
            require("../../Images/MG10.JPG"),
            require("../../Images/MG11.JPG"),
            require("../../Images/MG12.JPG"),
            require("../../Images/MG13.JPG"),
            require("../../Images/MG14.JPG"),
            require("../../Images/MG15.JPG"),
            require("../../Images/MG16.JPG"),
            require("../../Images/MG17.JPG")
        ]
    },
    {
        "title": "Backpack Giveaway",
        "date": "August 4, 2018",
        "images": [
            require("../../Images/backpack.jpg"),
            require("../../Images/backpack1.jpg"),
            require("../../Images/backpack2.jpg"),
            require("../../Images/backpack3.jpg"),
            require("../../Images/backpack4.jpg"),
            require("../../Images/backpack5.jpg"),
            require("../../Images/backpack6.jpg"),
            require("../../Images/backpack7.jpg"),
            require("../../Images/backpack8.jpg"),
            require("../../Images/backpack9.jpg"),
            require("../../Images/backpack10.jpg"),
            require("../../Images/backpack11.jpg"),
            require("../../Images/backpack12.jpg"),
            require("../../Images/backpack13.jpg"),
            require("../../Images/backpack14.jpg"),
            require("../../Images/backpack15.jpg"),
            require("../../Images/backpack16.jpg"),
            require("../../Images/backpack17.jpg"),
            require("../../Images/backpack18.jpg"),
            require("../../Images/backpack19.jpg"),
            require("../../Images/backpack20.jpg"),
            require("../../Images/backpack21.jpg"),
            require("../../Images/backpack22.jpg"),
            require("../../Images/backpack23.jpg"),
            require("../../Images/backpack24.jpg"),
            require("../../Images/backpack25.jpg"),
            require("../../Images/backpack26.jpg"),
            require("../../Images/backpack27.jpg"),
            require("../../Images/backpack28.jpg"),
            require("../../Images/backpack29.jpg"),
            require("../../Images/backpack30.jpg"),
            require("../../Images/backpack31.jpg"),
            require("../../Images/backpack32.jpg"),
            require("../../Images/backpack33.jpg"),
            require("../../Images/backpack34.jpg"),
            require("../../Images/backpack35.jpg"),
            require("../../Images/backpack36.jpg"),
            require("../../Images/backpack37.jpg"),
            require("../../Images/backpack38.jpg"),
            require("../../Images/backpack39.jpg"),
            require("../../Images/backpack40.jpg"),
            require("../../Images/backpack41.jpg"),
            require("../../Images/backpack42.jpg"),
            require("../../Images/backpack43.jpg"),
            require("../../Images/backpack44.jpg"),
            require("../../Images/backpack45.jpg"),
            require("../../Images/backpack46.jpg"),
            require("../../Images/backpack47.jpg"),
            require("../../Images/backpack48.jpg"),
            require("../../Images/backpack49.jpg"),
            require("../../Images/backpack50.jpg"),
            require("../../Images/backpack51.jpg"),
            require("../../Images/backpack52.jpg"),
            require("../../Images/backpack53.jpg"),
            require("../../Images/backpack54.jpg"),
            require("../../Images/backpack55.jpg"),
            require("../../Images/backpack56.jpg"),
            require("../../Images/backpack57.jpg"),
            require("../../Images/backpack58.jpg")
        ]
    },
    {
        "title": "Better Options TN Fliers",
        "date": " ",
        "images": [
            require("../../Images/Conferencia.png"),
            require("../../Images/opera.jpg"),
            require("../../Images/gala.png"),
            require("../../Images/flyer3.jpg"),
            require("../../Images/flyer4.jpg")
        ]
    },
]

class Photos extends Component {

    componentDidMount() {
        console.log('scroll to top')
        window.scrollTo(0, 0)
    }

    showPhotos () {
        let titlecount = 0
        return photos.map(boevent => {
            titlecount += 1
            let count = 0
            let title = <h2 className="event-title-main" key={boevent.title}>{boevent.title}</h2>
            let date = <h2 className="event-title" key={boevent.date}>{boevent.date}</h2>
            return (
                <React.Fragment>
                    {title}
                    {date}
                    {boevent.images.map(pic => {
                        count += 1
                        let newKey = boevent.title + "-" + count.toString()
                        return <img className="indiv-pic" key={newKey} alt="Event Photo" src={pic} />
                    })}
                </React.Fragment>
            )
        })
    }

    render() {
        return (
                <React.Fragment>
                    <div id="main-contact-div">
                        <img id="background-contact" src={background} alt="background"/>
                        <div className="photo-container-div">
                            {this.showPhotos()}
                        </div>
                    </div>
                </React.Fragment>
        );
    }
}

export default Photos;