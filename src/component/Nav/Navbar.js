import { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

class Navbar extends Component {
    render() { 
        return (
            <nav className="nav">
                <div>
                    <div className="name"></div>
                </div>
                <div className="menu">
                    <Link to="home">Home</Link>
                    <Link to="blog">Blog</Link>
                    <Link to="project">Projects</Link>
                    <button className="contact">Contact me</button>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;