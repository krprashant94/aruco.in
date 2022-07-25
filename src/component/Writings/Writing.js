import { Component } from "react";
import "./Writing.css";

class Writing extends Component {
    constructor(props) {
        super(props);
        this.article = [
            {
                name: "ICPR 2020",
                image: "https://www.micc.unifi.it/icpr2020/wp-content/uploads/2018/07/favicon-1.jpg",
                text: "Recognizing Bengali Word Images - A Zero-Shot Learning Perspective"
            },
            {
                name: "CVIP 2020",
                image: "https://cvip2020.iiita.ac.in/images/cvip/logo-red.png",
                text: "Bengali Place Name Recognition - Comparative Analysis Using Different CNN Architectures"
            },
            {
                name: "ACPR 2019",
                image: "https://www.acpr2019.org/images/ACPR_logo.png",
                text: "Finding Logo and Seal in Historical Document Images-An Object Detection Based Approach"
            },
        ]
    }
    state = { current: 0 }

    render() {
        return (<div className="feedbackPane">
            <h1 className="title">Scientific <span>writing</span> and conference proceedings...</h1>
            <div className="blur1"></div>
            <div className="frame">


                <div className="card">
                    <img src={this.article[this.state.current].image} alt={this.article[this.state.current].name} className="image"></img>
                    <div className="name">{this.article[this.state.current].name}</div>
                    <div className="text">
                        {this.article[this.state.current].text}
                    </div>
                </div>

                <br /><br />
                <div className="slider">
                    {
                        this.article.map(e => {
                            return (<span key={e.name} onClick={()=>{
                                var m = this.state.current;
                                m = (m+1)%this.article.length;
                                this.setState({current:m});
                            }}></span>)
                        })
                    }
                </div>
            </div>
            <div className="blur2"></div>
        </div>);
    }
}

export default Writing;