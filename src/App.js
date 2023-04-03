import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Achievement from './Achievement';
import './App.css';
import Footer from './component/footer/Footer';
import Intro from './component/Intro/Intro';
import Navbar from './component/Nav/Navbar';
import Rating from './component/rating/Rating';
import Timeline from './component/Timeline/Timeline';
import Writing from './component/Writings/Writing';
import Experience from './Experience';
import Projects from './Project';


class App extends Component {
  constructor(props) {
    super(props);
    this.test = 0;
  }

  render() {

    const education = [
      {
        align: "leftc",
        image: "./image/gec.jpg",
        title: "Infosys Corporate Traning",
        heading: "MEAN Stack",
        subheading: "Global Education Center Infosys, Mysore",
        text: ""
      },
      {
        align: "rightc",
        image: "./image/rcciit.jpg",
        title: "Bachelor of Technology",
        heading: "Computer Science and Engineering",
        subheading: "RCC Institute of Information Technology",
        text: "Maulana Abul Kalam Azad University of Technology, Kolkata"
      },
      {
        align: "leftc",
        image: "./image/kmpm.jpg",
        title: "Intermediate in Science",
        heading: "Physics Chemistry, Mathematics and Computer Science",
        subheading: "Mrs. K M P M Inter College, Jamshedpur",
        text: ""
      },
    ];
    return (<>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <><Intro />
            <Rating />
            <div style={{ height: "50px" }}></div>
            <Writing />
            <div style={{ height: "50px" }}></div>
            <Timeline data={education} />
            <div style={{ height: "100px" }}></div>
          </>
        } />
        <Route path='/project' element={<>
          <Projects />
          <div style={{ height: "50px" }}></div>
          <Rating />
          <div style={{ height: "50px" }}></div>
        </>} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/achievement' element={<Achievement />} />
        <Route path='/home' element={<Navigate to='/'/>} />
      </Routes>
      
      <Footer/>

    </>);
  }
}

export default App;
