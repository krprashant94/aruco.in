import { Component } from "react";
import "./Intro.css"

class Intro extends Component {

    resumeLink = "prashant_resume.pdf";
    github = "https://github.com/krprashant94";
    linkedin = "https://www.linkedin.com/in/waytoprashant";
    leetcode = "https://leetcode.com/krprashant94";


    skills = ["Problem Solving", "Big Data", "Node.js", "Algorithm", "Data Structure", "Big Data Processing", "Bug Hunting", "TensorFlow", "PySpark", "Pandas", "Gensim", "SQL"]
    state = { name: "Prashant Kumar", mhIntro: "700px" };

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        if (window.innerWidth <= 860) {
            this.setState({ mhIntro: "unset" });
        } else {
            this.setState({ mhIntro: (window.innerWidth * 0.6) + "px" });
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render() {
        let s1 = Math.floor(Math.random()*this.skills.length);
        let s2 = s1;
        let s3 = s1;
        while(s1 === s2){
            s2 = Math.floor(Math.random()*this.skills.length);
        }
        while(s3 === s1 || s3 === s2){
            s3 = Math.floor(Math.random()*this.skills.length);
        }
        return (
            <div className="intro" style={{ maxHeight: this.state.mhIntro }}>
                <div className="left">
                    <div>
                        <div className="hi">Hi, I'm</div>
                        <div className="name">{this.state.name}</div>
                        <div className="desc">
                            I am a programmer and a developer
                        </div>
                    </div>
                    <div>
                        <a href={this.resumeLink}><button className="contact">Resume</button></a>
                    </div>
                    <div className="social">
                        <a href={this.github}><img src="./img/github.png" alt="GitHub" /></a>
                        <a href={this.linkedin}><img src="./img/linkedin.png" alt="LinkedIn" /></a>
                        <a href={this.leetcode}><img src="./img/instagram.png" alt="Leetcode" /></a>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/vector1.png" alt="" className="vec" />
                    <img src="./img/vector2.png" alt="" className="vec" />
                    <img src="./img/boy.png" alt="" className="person" />
                    <img src="./img/glassesimoji.png" alt="" width="128px" className="sunglass" />
                    <img src="./img/humble.png" alt="" className="humble" />
                    <div className="skill skill1">{this.skills[s1]}</div>
                    <div className="skill skill2">{this.skills[s2]}</div>
                    <div className="skill skill3">{this.skills[s3]}</div>

                    <div className="blur1"></div>
                    <div className="blur2"></div>
                </div>
            </div>);
    }
}

export default Intro;