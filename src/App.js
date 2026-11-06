import { Component } from 'react';
import './App.css';
import Footer from './component/footer/Footer';
import Intro from './component/Intro/Intro';
import Navbar from './component/Nav/Navbar';
import Rating from './component/rating/Rating';
import Timeline from './component/Timeline/Timeline';
import Writing from './component/Writings/Writing';


class App extends Component {
  constructor(props) {
    super(props);
    this.test = 0;
  }

  render() {
    const education = [
      {
        align: "rightc",
        image: "./image/nitjsr.jpg",
        title: "Doctor of Philosophy",
        heading: "Computer Science and Engineering",
        subheading: "National Institute of Technology Jamshedpur",
        text: "Ongoing"
      },
      {
        align: "leftc",
        image: "./image/rcciit.jpg",
        title: "Bachelor of Technology",
        heading: "Computer Science and Engineering",
        subheading: "RCC Institute of Information Technology",
        // text: "Maulana Abul Kalam Azad University of Technology, Kolkata"
      },
      {
        align: "rightc",
        image: "./image/kmpm.jpg",
        title: "Intermediate in Science",
        heading: "Physics Chemistry, Mathematics and Computer Science",
        subheading: "Mrs. K M P M Inter College, Jamshedpur",
        text: ""
      },
    ];
    return (<>
      <Navbar />

      <Intro />
      <Rating />
      <div style={{ height: "50px" }}></div>
      <Writing />
      <div style={{ height: "50px" }}></div>
      <Timeline data={education} />
      <div style={{ height: "100px" }}></div>

      <Footer />

    </>);
  }
}

export default App;
