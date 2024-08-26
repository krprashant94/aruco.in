import { Component } from "react";
import Timeline from "./component/Timeline/Timeline";
import Footer from "./component/footer/Footer";
import Navbar from "./component/Nav/Navbar";

class Achievement extends Component {
    state = {  } 

    render() { 

        const data = [
            {
                image: "./image/alteryx.png",
                title: "Alteryx Foundational Micro",
                heading: "",
                subheading: "Issued by Alteryx",
                text: 'Earners of this micro-credential have a basic understanding of data analytics concepts and key Designer functionality. They can identify data types and data formats as well as recognize the foundational elements of Alteryx Designer and associate the most used tools with their functionality. <br><a style="color:#00bcd4;" href="https://www.credly.com/badges/9c85f2b0-971e-487a-ad1a-9f27d3797d2f/public_url">View</a>'
            },
            {
                image: "./image/incorta.png",
                title: "Essentials for Business Analyst",
                heading: "",
                subheading: 'Issued by Learn Incorta',
                text: 'The Incorta 5 Essentials for Business Analysts course provides students with a comprehensive understanding of the procedures and techniques necessary to rapidly load data, build dashboards, and produce immediate insights using Incorta. Through self-paced, interactive learning and project-based labs, students will master Incorta key concepts, terminology and topics for on the job success. This course requires student experience with data analysis. <br><a style="color:#00bcd4;" href="https://www.credential.net/987370fc-c2b5-4d10-8d34-df4b7ea9ed38">View</a>'
            },
            {
                image: "./image/google.png",
                title: "Cloud Digital Leader",
                heading: "",
                subheading: 'Issued by Google Cloud',
                text: 'A successful candidate can articulate the capabilities of Google Cloud core products and services and how they benefit organizations. The candidate can also describe common business use cases and how cloud solutions support an enterprise. <br><a style="color:#00bcd4;" href="https://www.credential.net/9df7bfd3-9d5f-49fa-b227-a54c1d7b7393?key=2fc9b1224269e3f0efb52f77f9c4fa3547504db0733776e2f5436d0ea08e0db7">View</a>'
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