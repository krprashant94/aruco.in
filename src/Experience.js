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
                image: "./image/american_express.png",
                title: "American Express",
                heading: "Site Reliability Engineer II",
                subheading: "Bangalore",
                text: 'American Express Company is an American bank holding company and multinational financial services corporation that specializes in payment cards. It is headquartered at 200 Vesey Street, also known as American Express Tower, in the Battery Park City neighborhood of Lower Manhattan.'
            },
            {
                align: "leftc",
                image: "./image/accenture.png",
                title: "Accenture",
                heading: "AIML Computational Science Senior Analyst",
                subheading: "Bangalore",
                text: 'Accenture plc is a global multinational professional services company originating in the United States and headquartered in Dublin, Ireland, that specializes in information technology (IT) services and management consulting. A Fortune Global 500 company.'
            },
            {
                align: "rightc",
                image: "./image/infosys.png",
                title: "Infosys Limited",
                heading: "Digital Specialist Engineer",
                subheading: "Bangalore",
                text: 'Infosys Limited is an Indian multinational technology company that offers information technology, business consulting, and outsourcing services. Founded in 1981 by seven engineers, the company is headquartered in Bengaluru and considered one of the Big Six Indian IT companies.'
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