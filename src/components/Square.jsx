import React, { Component } from "react";
import Pawn from "./../pieces/Pawn.jsx";
import Rook from "./../pieces/Rook.jsx";
import Knight from "./../pieces/Knight.jsx";
import Bishop from "./../pieces/Bishop.jsx";
import Queen from "./../pieces/Queen.jsx";
import King from "./../pieces/King.jsx";
import "./../styles/SquareStyle.css";
import Draggable from "./Draggable.jsx";
import { conditionalExpression } from "@babel/types";

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squareID: "",
            gameBeginning: true
        };
    }

    startPositions(width){
        const pos = this.props.position;
        if(pos.charAt(1) == '2'){
            return <Pawn width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wP-"+pos}
            moveMade={this.moveMade}
            position={pos}/>;
        }else if (pos.charAt(1) == '7'){
            return <Pawn width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"bP-"+pos}/>;
        } else if (pos == 'a1' || pos == 'h1') {
            return <Rook width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wR-"+pos}/>;
        } else if (pos == 'a8' || pos == 'h8') {
            return <Rook width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"bR-"+pos}/>;
        } else if (pos == 'b1' || pos == 'g1') {
            return <Knight width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wKn-"+pos}/>;
        } else if (pos == 'b8' || pos == 'g8') {
            return <Knight width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"bKn-"+pos} />;
        } else if (pos == 'c1' || pos == 'f1') {
            return <Bishop width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wB-"+pos} />;
        } else if (pos == 'c8' || pos == 'f8') {
            return <Bishop width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"bB-"+pos} />;
        } else if (pos == 'd1') {
            return <Queen width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wQ-"+pos} />;
        } else if (pos == 'd8') {
            return <Queen width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"bQ-"+pos} />;
        } else if (pos == 'e1') {
            return <King width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wKi-"+pos} />;
        } else if (pos == 'e8') {
            return <King width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"bKi-"+pos} />;
        }     
    }

    moveMade(id){
        console.log("I WAS CALLED", id);
    }

    // onDragEnd(id){
        
    // }

    render() {
        // console.log("RENDERING");
        return <div 
                className="square"
                id= {this.props.position}
                onMouseEnter={() => this.setState({ squareID: this.props.position})}
                style={{ 
                    width: this.props.width+ "px", 
                    height: this.props.width + "px", 
                    backgroundColor: this.props.squareColor
                    //,outline: "3px solid yellow"
                    }}>
                <Draggable
                children={this.startPositions(this.props.width)}
                />

                </div>
                ;
    }
}

export default Square;
