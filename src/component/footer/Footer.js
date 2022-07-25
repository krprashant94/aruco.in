import { Component } from "react";
import "./Footer.css"
class Footer extends Component {
    
    state = {}
    render() {
        return (<>
            <footer class="footer">
                <div class="md-5">
                    <h1>Prashant Kumar Prasad</h1>
                    <div class="row">
                        <div class="col-6">
                            <ul class="list-unstyled">
                                <li><a href="http://localhost:3000/prashant_resume.pdf">Resume download</a></li>
                                <li><a href="mailto:kr.prashant94@gmail.com">Hire me</a></li>
                                <li><a href="#partner">Partner with me</a></li>
                                <li><a href="#">Team</a></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="list-unstyled">
                                <li><a href="#doc">Documentation</a></li>
                                <li><a href="mailto:kr.prashant94@gmail.com">Support</a></li>
                            </ul>
                        </div>
                    </div>
                    Version 1.0
                </div>
                <div class="md-2">
                    <h3 style={{textAlign:"right"}}>Contact me &nbsp;</h3>
                </div>
                <div class="md-5">
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