import { Component } from "react";
import Timeline from "./component/Timeline/Timeline";

class Projects extends Component {

    state = {}

    render() {

        const project = [
            {
                align: "leftc",
                image: "./image/gatecse.png",
                title: "GATE CSE",
                heading: "App for GATE aspirants",
                subheading: "",
                text: 'A exam preparation mobile application includes online exam study material and guide. <br><a style="color:#00bcd4;" href="https://play.google.com/store/apps/details?id=com.redmorus.gatecse">Download</a>'
            },
            {
                align: "rightc",
                image: "./image/ardinobot.png",
                title: "Eagle",
                heading: "An ultimate repository for line follower",
                subheading: "",
                text: 'Autonomous line follower tutorial and source code based on arduino microcontroller. <br><a style="color:#00bcd4;" href="https://krprashant94.github.io/eagle/tutorial">Learn more</a>'
            },
            {
                align: "leftc",
                image: "./image/securefile.png",
                title: "Hybrid Cryptography on Cloud",
                heading: "Encrypt your blob file",
                subheading: "",
                text: 'File encryption tool that uses public key encryption technique with RSA, AES and hardware key.  <br><a style="color:#00bcd4;" href="https://hybrid-cryptography-on-cloud.readthedocs.io/en/latest">Learn more</a>'
            },
            {
                align: "rightc",
                image: "./image/mailler_project.png",
                title: "Optical Character Recognition",
                heading: "Read the computer written text with the help of ML",
                subheading: '',
                text: 'A OCR based on tensorflow and OpenCV library that can detect computer generated character. <br><a style="color:#00bcd4;" href="https://github.com/krprashant94/Python-Certificate-Mailer">Learn more</a>'
            },
            {
                align: "leftc",
                image: "./image/mailler_project.png",
                title: "Python Certificate Mailer",
                heading: "Solution for mailing mass certificate for college event",
                subheading: '<a style="color:#00bcd4;" href="https://github.com/krprashant94/Python-Certificate-Mailer">Learn more</a>',
                text: ''
            },
        ];

        return (<div>
            <Timeline data={project}></Timeline>
        </div>);
    }
}

export default Projects;