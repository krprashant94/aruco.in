import { Component } from "react";
import "./Writing.css";

class Writing extends Component {
    constructor(props) {
        super(props);
        this.article = [
            {
                name: "ICPR 2020",
                image: "/image/iapr.png",
                title: "Recognizing Bengali Word Images - A Zero-Shot Learning Perspective",
                description: 'Zero-Shot Learning (ZSL) techniques enable classification of entirely new classes not encountered during training, which is useful for real-life scenarios where training on all possible classes is impractical. This study explores ZSL for recognizing Bengali script word images. The method integrates deep features from various CNN models with 13 basic stroke shapes typical in Bengali characters, referred to as "Signature/Semantic Attributes" in ZSL. Promising results were achieved through five-fold cross-validation with 250 word classes, demonstrating the effectiveness of this approach in zero-shot word recognition.'
            },
            {
                name: "CVIP 2020",
                image: "/image/cvip2020.png",
                title: "Bengali Place Name Recognition - Comparative Analysis Using Different CNN Architectures",
                description: "Optical Character Recognition (OCR) has been used in various applications like document indexing, reading aids for the visually impaired, and postal automation. However, its effectiveness is often limited by errors in character segmentation, leading to subpar performance. To address this, word recognition has become the preferred method in scenarios where full character-wise transcription isn't necessary. This article examines the recognition of Bengali place names as word images using five traditional OCR architectures. Experiments were conducted on word images from 608 place name classes, and the results were consistently encouraging."
            },
            {
                name: "ACPR 2019",
                image: "/image/icpr_logo.png",
                title: "Finding Logo and Seal in Historical Document Images-An Object Detection Based Approach",
                description: 'Logos and seals authenticate and identify document sources, a practice dating back to medieval times. Modern algorithms for detecting these elements focus primarily on contemporary documents, but they often struggle with historical ones due to challenges like noise, bleed-through, blurred details, and low contrast. The proposed method addresses this issue by applying an object detection framework using deep learning, eliminating the need for pre-processing steps like layout analysis or binarization. Tests on 12th to 16th-century historical images showed promising results, marking this as the first use of object detection for logo identification in historical documents.'
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
                    <div className="paper">{this.article[this.state.current].title}</div>
                    <div className="description">
                        {this.article[this.state.current].description}
                    </div>
                </div>

                <br /><br />
                <div className="slider">
                    {
                        this.article.map(e => {
                            return (<span key={e.name} onClick={() => {
                                var m = this.state.current;
                                m = (m + 1) % this.article.length;
                                this.setState({ current: m });
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
