import { Component } from 'react';
import './App.css';
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

    return (<>
      <Navbar />
      <Intro />
      <Rating />
      <div style={{ height: "50px" }}></div>
      <Writing />
      <div style={{ height: "50px" }}></div>
      <Timeline />
      <div style={{ height: "100px" }}></div>

    </>);
  }
}

export default App;
