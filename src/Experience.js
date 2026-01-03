import { Component } from "react";
import Timeline from "./component/Timeline/Timeline";
import Navbar from "./component/Nav/Navbar";
import Footer from "./component/footer/Footer";

class Experience extends Component {
    state = {}
    render() {
        const data = [
            {
                align: "rightc",
                image: "./image/accenture.png",
                title: "Accenture",
                heading: "AIML Computational Science Senior Analyst",
                subheading: "Bangalore",
                text: 'Accenture plc is a global multinational professional services company originating in the United States and headquartered in Dublin, Ireland, that specializes in information technology (IT) services and management consulting. A Fortune Global 500 company.'
            },
            {
                align: "leftc",
                image: "./image/infosys.png",
                title: "Infosys Limited",
                heading: "Digital Specialist Engineer",
                subheading: "Bangalore",
                text: 'Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.'
            }
        ];
        return (
            <div>
                <Navbar />
                <Timeline data={data}></Timeline>
                <Footer />
            </div>
        );
    }
}

export default Experience;