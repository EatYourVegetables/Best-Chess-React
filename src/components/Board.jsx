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
            whiteOutlineColor: "gray",
            blackOutlineColor: "#3b3b3b",
            activePiece: "",
            activePieceOrigPos: "",
            selectedSquare: "",
            map: {a1: "wr", b1: "wkn", c1: "wb", d1: "wq", e1: "wk", f1: "wb", g1: "wkn", h1: "wr", 
                  a2: "wp", b2: "wp", c2: "wp", d2: "wp", e2: "wp", f2: "wp", g2: "wp", h2: "wp", 
                  a3: "", b3: "", c3: "", d3: "", e3: "", f3: "", g3: "", h3: "",
                  a4: "", b4: "", c4: "", d4: "", e4: "", f4: "", g4: "", h4: "",
                  a5: "", b5: "", c5: "", d5: "", e5: "", f5: "", g5: "", h5: "",
                  a6: "", b6: "", c6: "", d6: "", e6: "", f6: "", g6: "", h6: "",
                  a7: "bp", b7: "bp", c7: "bp", d7: "bp", e7: "bp", f7: "bp", g7: "bp", h7: "bp",
                  a8: "br", b8: "bkn", c8: "bb", d8: "bq", e8: "bk", f8: "bb", g8: "bkn", h8: "br"}
        };
    }


    isDark(index) {
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

    saveActivePieceInfo = (piece, pos) => {
        this.setState({
            activePiece: piece,
            activePieceOrigPos: pos
        }, () => console.log("BOARD ACTIVE PIECE INFO = "+this.state.activePiece, this.state.activePieceOrigPos));
    }

    selectSquare = pos => {
        this.setState({
            selectedSquare: pos
        });
    }

    movePiece = () => {
        console.log('MOVING PIECE')
        this.setState({
            map: {...this.state.map, 
                [this.state.activePieceOrigPos]: "", 
                [this.state.selectedSquare]: this.state.activePiece}
        },
        () => console.log(this.state.map, this.state.selectedSquare))
    }

    render() {
        return <section id="board-container">
            <div id="board" style={{ width: this.state.boardWidth + "px", height: this.state.boardWidth + "px"}}>

                
                {positions.map((position, index) => {
                    const isDark = this.isDark(index);
                    return <Square
                        width={this.state.boardWidth/8}
                        squareColor={isDark ? this.state.blackSquareColor : this.state.whiteSquareColor}
                        oppositeSquareColor={!isDark ? this.state.blackSquareColor : this.state.whiteSquareColor}
                        colorWhite={this.state.whitePieceColor}
                        colorBlack={this.state.blackPieceColor}
                        whiteOutline={this.state.whiteOutlineColor}
                        blackOutline={this.state.blackOutlineColor}
                        position= {position}
                        key= {position}
                        saveActivePieceInfo={this.saveActivePieceInfo}
                        activePiece={this.state.activePiece}
                        activePieceOrigPos={this.state.activePieceOrigPos}
                        selectSquare={this.selectSquare}
                        selectedSquare={this.state.selectedSquare}
                        map={this.state.map}
                        movePiece={this.movePiece}
                    />
                })}
                
            </div>
        </section>;
    }
}

export default Board;
