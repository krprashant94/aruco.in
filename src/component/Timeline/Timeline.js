import { Component } from "react";
import "./Timeline.css";

class Timeline extends Component {

    constructor(props) {
        super(props);
        console.log(props.data);
    }

    render() {
        return (<>
            {
                this.props.data.map((e, idx) => {
                    return (
                        <div className={(idx % 2 === 0 ? "leftc" : "rightc") + " twosplit"} key={e.title}>
                            <div className="image">
                                <div className="blur1"></div>
                                <img src={e.image} alt="" />
                            </div>
                            <div>
                                <div className="degree">{e.title}</div>
                                <div className="major">{e.heading}</div>
                                <div className="college" dangerouslySetInnerHTML={{ __html: e.subheading }} />
                                <div dangerouslySetInnerHTML={{ __html: e.text }} style={{ textAlign: "justify" }} />
                            </div>
                        </div>
                    )
                })
            }
        </>);
    }
}

export default Timeline;