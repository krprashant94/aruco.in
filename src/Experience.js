import { Component } from "react";
import Timeline from "./component/Timeline/Timeline";

class Experience extends Component {
    state = {  } 
    render() { 
        const data = [
            {
                align: "leftc",
                image: "./image/infosys.jpg",
                title: "Infosys Limited",
                heading: "Digital Specialist Engineer",
                subheading: "Bengaluru",
                text: 'Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.'
            }
        ];
        return (<div>
            <Timeline data={data}></Timeline>
        </div>);
    }
}
 
export default Experience;