import { Component } from "react";
import Timeline from "./component/Timeline/Timeline";
import Footer from "./component/footer/Footer";
import Navbar from "./component/Nav/Navbar";

class Achievement extends Component {
    state = {  } 

    render() { 

        const data = [
            {
                image: "./image/google_ace.png",
                title: "Associate Cloud Engineer Certification",
                heading: "",
                subheading: "Issued by Google Cloud",
                text: 'Associate Cloud Engineers deploy applications, monitor operations, and manage enterprise solutions. They use Google Cloud Console and the command-line interface to perform common platform-based tasks to maintain one or more deployed solutions that leverage Google-managed or self-managed services on Google Cloud. <br><a style="color:#00bcd4;" href="https://www.credly.com/badges/b7a2ef5b-a26a-49e9-9dfa-6c7ff2f5269d">View</a>'
            },
            {
                image: "./image/google_cdl.png",
                title: "Cloud Digital Leader",
                heading: "",
                subheading: 'Issued by Google Cloud',
                text: 'A successful candidate can articulate the capabilities of Google Cloud core products and services and how they benefit organizations. The candidate can also describe common business use cases and how cloud solutions support an enterprise. <br><a style="color:#00bcd4;" href="https://www.credly.com/badges/5a6adf6a-a8f5-40d4-953e-7e53f0386d06">View</a>'
            },
            {
                image: "./image/dp-900.png",
                title: "Azure Data Fundamentals",
                heading: "",
                subheading: "Issued by Microsoft",
                text: 'Earners of the Azure Data Fundamentals certification have demonstrated foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services. <br><a style="color:#00bcd4;" href="https://www.credly.com/badges/0eb5e5e5-e457-4388-a4dd-8579a5858c02">View</a>'
            },
            {
                image: "./image/ai-900.png",
                title: "Azure AI Fundamentals",
                heading: "",
                subheading: 'Issued by Microsoft',
                text: 'Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services. <br><a style="color:#00bcd4;" href="https://www.credly.com/badges/e2e83ac1-a295-49b0-8085-350432439046">View</a>'
            },
            {
                image: "./image/az-900.png",
                title: "Azure Fundamentals",
                heading: "",
                subheading: "Issued by Microsoft",
                text: 'Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure. <br><a style="color:#00bcd4;" href="https://www.credly.com/badges/d1c1454c-4737-42d4-b3d8-02b22a7e65db">View</a>'
            },
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
 
export default Achievement;