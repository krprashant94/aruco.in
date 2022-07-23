import { Component } from "react";
import "./Writing.css";

class Writing extends Component {
    constructor(props) {
        super(props);
        this.article = [
            {
                name: "User 1",
                image: "https://308286-943399-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2022/03/innocent-modern-dp-for-whatsapp.png",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                name: "User 2",
                image: "https://308286-943399-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2022/03/innocent-modern-dp-for-whatsapp.png",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                name: "User 3",
                image: "https://308286-943399-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2022/03/innocent-modern-dp-for-whatsapp.png",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                name: "User 4",
                image: "https://308286-943399-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2022/03/innocent-modern-dp-for-whatsapp.png",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
        ]
    }
    state = { current: 0 }

    render() {
        return (<div className="feedbackPane">
            <h1 className="title">Valuable <span>feedback</span> from people and colleagues...</h1>
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