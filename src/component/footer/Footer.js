import { Component } from "react";
import "./Footer.css"
class Footer extends Component {
    
    state = {}
    render() {
        return (<>
            <footer className="footer">
                <div className="md-5">
                    <h1>Prashant Kumar Prasad</h1>
                    <div className="row">
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li><a href="prashant_resume.pdf">Resume download</a></li>
                                <li><a href="mailto:kr.prashant94@gmail.com">Hire me</a></li>
                                <li><a href="project">Projects</a></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li><a href="mailto:kr.prashant94@gmail.com">Support</a></li>
                            </ul>
                        </div>
                    </div>
                    Version 1.0
                </div>
                <div className="md-2">
                    <h3 style={{textAlign:"right"}}>Contact me &nbsp;</h3>
                </div>
                <div className="md-5">
                    <form>
                        <input type="email" placeholder="Enter email" />
                        <textarea placeholder="Message"></textarea>
                        <button type="button">Send</button>
                    </form>
                </div>
            </footer>
        </>);
    }
}

export default Footer;