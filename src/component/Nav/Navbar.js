import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    const [hideMenu, setHideMenu] = useState("navhide")
    return (
        <>
            <nav className="nav">
                <div>
                    <div className="name"><div className="menuicon" onClick={() => {
                        setHideMenu(hideMenu === "navhide" ? "navshow" : "navhide");
                    }} ></div></div>
                </div>
                <div className="menu">
                    <Link to="/home" className="menuitem">Home</Link>
                    <Link to="/project" className="menuitem">Projects</Link>
                    <Link to="/experience" className="menuitem">Experience</Link>
                    <Link to="/achievement" className="menuitem">Achievement</Link>
                    <a href="https://prashantbyte.wordpress.com" className="menuitem">Blog</a>
                    <button className="contact">Contact me</button>
                </div>
            </nav>
            <div className={hideMenu}>
                <Link to="/home" className="extra_menu">Home</Link>
                <Link to="/project" className="extra_menu">Projects</Link>
                <Link to="/experience" className="extra_menu">Experience</Link>
                <Link to="/achievement" className="extra_menu">Achievement</Link>
            </div>
        </>
    );
}

export default Navbar;