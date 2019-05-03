import React, { Component } from "react";
import Square from "./Square.jsx";
import "./../styles/BoardStyle.css";

const positions = [
"a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8",
"b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8",
"c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",
"d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8",
"e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8",
"f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8",
"g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
"h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8",
]

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardWidth: 500,
            whiteSquareColor: "#537895",
            blackSquareColor: "#09203f",
            blackPieceColor: "black",
            whitePieceColor: "white",
            outlineColor: "gray"
        };
    }

    isBlack(index) {
        if (positions[index].charCodeAt(0) % 2 == 0){
            if (Number(positions[index].charAt(1)) % 2 == 0){
                return true;
            }
            return false;
        }else{
            if (Number(positions[index].charAt(1)) % 2 == 0) {
                return false;
            }
            return true;
        }
    }

    render() {
        return <section id="board-container">
            <div id="board" style={{ width: this.state.boardWidth + "px", height: this.state.boardWidth + "px"}}>

                
                {positions.map((position, index) => {
                    return <Square
                        width={this.state.boardWidth/8}
                        squareColor={this.isBlack(index) ? this.state.blackSquareColor : this.state.whiteSquareColor}
                        colorWhite={this.state.whitePieceColor}
                        colorBlack={this.state.blackPieceColor}
                        outline={this.state.outlineColor}
                        position= {position}
                        key= {position}
                    />
                })}
                
            </div>
        </section>;
    }
}

export default Board;
