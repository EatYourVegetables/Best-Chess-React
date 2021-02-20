import React, { Component } from "react";
import "./../styles/PawnStyle.css";

class Pawn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        };
    }

    componentDidMount() {
        console.log("compDidMount")
    }

    // returnInfo = () => {
    //     this.setState(
    //         {id: this.props.id},
    //         () => {
    //             console.log(this.state)
    //         }
    //     );
    // };

    render() {

        return <div
        className="pawn" 
        id={this.props.id}
        onMouseEnter={this.returnInfo}
        style={this.props.boardFlipped
        ? {transform: "rotate(180deg)"}
        : {}}
        //onMouseUp={() => this.props.moveMade(this.props.position)}
        >
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1"
            viewBox="0 0 55 55" 
            preserveAspectRatio="none"
            width={this.props.width} height={this.props.width}>
                <g transform="translate(5, 3)">
                    <path d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 
                    C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 
                    10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 
                    28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 
                    C 26,10.79 24.21,9 22,9 z " 
                    style={{
                        opacity: 1, 
                        fill: this.props.color, 
                        fillOpacity: 1, 
                        fillRule :"nonzero", 
                        stroke: this.props.outline, 
                        strokeWidth: 1.5, 
                        strokLinecap:"round", 
                        strokLinejoin:"miter", 
                        strokMiterlimit:4, 
                        strokDasharray:"none", 
                        strokeOpacity:1}} />
                </g>
            </svg>
        </div>
            ;
    }
}

export default Pawn;
