import React, { Component } from "react";
// import "./../styles/PawnStyle.css";

class Rook extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return <div className="rook">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1"
            viewBox="0 0 55 55" 
            preserveAspectRatio="none"
            width={this.props.width} height={this.props.width}>
                <g xmlns="http://www.w3.org/2000/svg"
                transform="translate(5, 5)" 
                style={{opacity: 1, 
                fill: this.props.color, 
                fillOpacity: 1, 
                fillRule: "evenodd",
                stroke:this.props.outline, 
                strokeWidth: 1.5, 
                strokeLinecap:"round",
                strokLinejoin:"round",
                strokeMiterlimit:4, 
                strokeDasharray:"none", 
                strokeOpacity:1}}>
                    <path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z " style={{strokeLinecap: "butt"}} />
                    <path d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z " style={{ strokeLinecap: "butt" }} />
                    <path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14" style={{ strokeLinecap: "butt" }} />
                    <path d="M 34,14 L 31,17 L 14,17 L 11,14" />
                    <path d="M 31,17 L 31,29.5 L 14,29.5 L 14,17" style={{ strokeLinecap: "butt", strokeLinejoin:"miter" }} />
                    <path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
                    <path d="M 11,14 L 34,14" style={{ fill: "none", stroke: this.props.outline, strokeLinejoin: "miter"}} />
                </g>
            </svg>
        </div>
            ;
    }
}

export default Rook;
