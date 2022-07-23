import { Component } from "react";
import "./Intro.css"

class Intro extends Component {

    state = { name: "Prashant Kumar", mhIntro: "700px"};

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        if(window.innerWidth <= 860 ){
            this.setState({mhIntro: "unset"});
        }else{
            this.setState({mhIntro: (window.innerWidth*0.6)+"px"});
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render() {
        return (
            <div className="intro" style={{ maxHeight: this.state.mhIntro}}>
                <div className="left">
                    <div>
                        <div className="hi">Hi, I'm</div>
                        <div className="name">{this.state.name}</div>
                        <div className="desc">
                            front learning and web deeveloper experience in web programming.
                        </div>
                    </div>
                    <div>
                        <button className="contact">Hire me</button>
                    </div>
                    <div className="social">
                        <img src="./img/github.png" alt="GitHub" />
                        <img src="./img/linkedin.png" alt="LinkedIn" />
                        <img src="./img/instagram.png" alt="Leetcode" />
                    </div>
                </div>
                <div className="right">
                    <img src="./img/vector1.png" alt="" className="vec" />
                    <img src="./img/vector2.png" alt="" className="vec" />
                    <img src="./img/boy.png" alt="" className="person" />
                    <img src="./img/glassesimoji.png" alt="" width="128px" className="sunglass" />
                    <img src="./img/humble.png" alt="" className="humble" />
                    <div className="skill skill1">Problem Solving</div>
                    <div className="skill skill2">Big Data</div>
                    <div className="skill skill3">Bug Hunting</div>

                    <div className="blur1"></div>
                    <div className="blur2"></div>
                </div>
            </div>);
    }
}

export default Intro;