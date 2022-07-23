import { Component } from "react";
import "./Timeline.css";

class Timeline extends Component {

    render() {
        return (
            <>
                <div className="leftc twosplit">
                    <div className="image">
                        <div className="blur1"></div>
                        <img src="https://officechai.com/wp-content/uploads/2015/08/infosys-mysore.jpeg" alt=""/>
                    </div>
                    <div>
                        <div className="degree">Infosys Corporate Traning</div>
                        <div className="major">MEAN Stack</div>
                        <div className="college">
                            Global Education Center Infosys, Mysore
                        </div>
                    </div>
                </div>

                <div className="rightc twosplit">
                    <div className="image">
                        <div className="blur1"></div>
                        <img src="https://lh3.googleusercontent.com/5WyYSjHhHrLARPNIM27LsfrOZi9yX07UK_WxYqTpKE48eEsUSko9FoObbukxoJ2z5J_BCT9-yQHD2Y2mvZz9WyBiamQRdzxZ9yw57EVRBSlSX4ZKGJHTA3ML_vCEZSrZ6A=w1280" alt=""/>
                    </div>
                    <div>
                        <div className="degree">Bachelor of Technology</div>
                        <div className="major">Computer Science and Engineering</div>
                        <div className="college">
                            RCC Institute of Information Technology<br/>
                            Maulana Abul Kalam Azad University of Technology, Kolkata
                        </div>
                    </div>
                </div>

                <div className="leftc twosplit">
                    <div className="image">
                        <div className="blur1"></div>
                        <img src="https://lh6.googleusercontent.com/CNPoRhg1gw8PBoEbpHvT9X4IRfp9VzafIShpWokgr3gqm-r1MBw3NHVUACnEe16pfVjgK3Pqjbq1YVzqihVZTzJRDuQ0k0QW7AM4Gjyan28lNeC60fjejv6McmQZi7S2tw=w1280" alt=""/>
                    </div>
                    <div>
                        <div className="degree">Intermediate in Science</div>
                        <div className="major">Physics Chemistry, Mathematics and Computer Science</div>
                        <div className="college">
                            Mrs. K M P M Inter College, Jamshedpur
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Timeline;