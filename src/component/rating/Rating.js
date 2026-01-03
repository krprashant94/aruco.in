import { Component } from "react";
import "./Rating.css"

class Rating extends Component {
    constructor(props) {
        super(props);
        this.arr = [["4+", "Year", "Experience"],["10+", "Completed", "Live Project"],["3+", "Programming", "Languages"],];
    }

    render() {
        
        return (<div className="kpi">

            {this.arr.map(item =>
            (<div key={item}>
                <span className="value"><span>{item[0]}</span></span>
                <span className="mesure">{item[1]}</span>
                <span className="text">{item[2]}</span>
            </div>)
            )}
        </div>);
    }
}

export default Rating;