import { Component } from "react";
import Timeline from "./component/Timeline/Timeline";
import Navbar from "./component/Nav/Navbar";
import Footer from "./component/footer/Footer";

class Experience extends Component {
    state = {}
    render() {
        const data = [
            {
                align: "leftc",
                image: "./image/infosys.jpg",
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