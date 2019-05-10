import React, { Component } from "react";
// import "./../styles/PawnStyle.css";

class Knight extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return <div className="knight" id={this.props.id}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 55 55"
                preserveAspectRatio="none"
                width={this.props.width} height={this.props.width}>
                <g xmlns="http://www.w3.org/2000/svg" 
                transform="translate(5, 5)"
                style={{
                opacity:1,
                fill:"none", 
                fillOpacity:1, 
                fillRule:"evenodd", 
                stroke:this.props.outline, 
                strokeWidth:1.5, 
                strokeLinecap:"round",
                strokeLinejoin:"round",
                strokeMiterlimit:4, 
                strokeDasharray:"none", 
                strokeOpacity:1}}>
                    <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" style={{fill:this.props.color, stroke:this.props.outline}} />
                    <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" style={{fill:this.props.color, stroke:this.props.outline}} />
                    <path d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z" style={{ fill: this.props.outline, stroke: this.props.outline }} />
                    <path d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" style={{ fill: this.props.outline, stroke: this.props.outline }} />
                </g>
            </svg>
        </div>
            ;
    }
}

export default Knight;
