import { Component } from "react";
import { submitQuery } from "../controller/halper";
import "./Footer.css"

class Footer extends Component {

    state = {}

    handleSubmit(e) {
        e.preventDefault();
        const frm = document.forms.contact;
        submitQuery(frm.email.value, frm.message.value).then((res) => {
            console.log(res);
            frm.reset();
        }).catch((err) => {
            console.error("Error on submitting form: ");
            console.error(err);
        })
    }

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
                    <h3 style={{ textAlign: "right" }}>Contact me &nbsp;</h3>
                </div>
                <div className="md-5">
                    <form name="contact">
                        <input name="email" type="email" placeholder="Enter email" />
                        <textarea name="message" placeholder="Message"></textarea>
                        <button type="submit" onClick={this.handleSubmit}>Send</button>
                    </form>
                </div>
            </footer>
        </>);
    }
}

export default Footer;
