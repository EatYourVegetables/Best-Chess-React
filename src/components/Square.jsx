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
            activePiece: "",
            activePieceOrigSquare: "",
            selectedSquare: "",
            gameBeginning: true
        };
    }

    startPositions(width){
        const pos = this.props.position;
        if(this.props.map[pos] === "wr"){
            return <Rook width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wr-"+pos}
            boardFlipped={this.props.boardFlipped}/>;
        } else if (this.props.map[pos] === "br"){
            return <Rook width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"br-"+pos}
            position={pos}
            boardFlipped={this.props.boardFlipped}/>;
        } else if (this.props.map[pos] === "wp"){
            return <Pawn width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wp-"+pos}
            position={pos}
            boardFlipped={this.props.boardFlipped}/>;
        } else if (this.props.map[pos] === "bp"){
            return <Pawn width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"bp-"+pos}
            position={pos}
            boardFlipped={this.props.boardFlipped}/>;
        } else if (this.props.map[pos] === "wkn"){
            return <Knight width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wkn-"+pos}
            position={pos}
            boardFlipped={this.props.boardFlipped}/>;
        } else if (this.props.map[pos] === "bkn"){
            return <Knight width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"bkn-"+pos}
            position={pos}
            boardFlipped={this.props.boardFlipped}/>;
        } else if (this.props.map[pos] === "wb"){
            return <Bishop width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wb-"+pos}
            position={pos}
            boardFlipped={this.props.boardFlipped}/>;
        } else if (this.props.map[pos] === "bb"){
            return <Bishop width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"bb-"+pos}
            position={pos}
            boardFlipped={this.props.boardFlipped}/>;
        } else if (this.props.map[pos] === "wq"){
            return <Queen width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wq-"+pos}
            position={pos}
            boardFlipped={this.props.boardFlipped}/>;
        } else if (this.props.map[pos] === "bq"){
            return <Queen width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"bq-"+pos}
            position={pos}
            boardFlipped={this.props.boardFlipped}/>;
        } else if (this.props.map[pos] === "wk"){
            return <King width={width} 
            color={this.props.colorWhite} 
            outline={this.props.whiteOutline}
            id={"wk-"+pos}
            position={pos}
            boardFlipped={this.props.boardFlipped}/>;
        } else if (this.props.map[pos] === "bk"){
            return <King width={width} 
            color={this.props.colorBlack} 
            outline={this.props.blackOutline}
            id={"bk-"+pos}
            position={pos}
            boardFlipped={this.props.boardFlipped}/>;
        }
    }


    onClick = () => {
        const pos = this.props.position;
        //this.props.selectSquare(pos);
        if(this.props.activePiece != ""){
            this.props.movePiece(pos);
        }
    };

    onClickPlayer = () => {
        const pos = this.props.position;
        this.props.selectSquare(pos);
        this.props.saveActivePieceInfo(this.props.map[pos], pos);
        // this.setState(
        //     {activePiece: this.props.map[pos], selectedSquare: pos, activePieceOrigSquare: pos},
        //     () => {
        //         console.log("Selected square = "+
        //         this.state.selectedSquare+
        //         " Active Piece = "+ 
        //         this.state.activePiece+
        //         " Active Piece Orig Square = "+
        //         this.state.activePieceOrigSquare)
        //     }
        // );
            console.log("ON CLICK PLAYER")
            // console.log("Active Piece info ELSE = ",this.props.activePiece, this.props.activePieceOrigPos)
            // if(this.props.activePiece != ""){
            //     this.props.movePiece(pos);
            // }
        
    };
    
    componentDidUpdate(prevProps, prevState)
    {
        //onsole.log("UPDATED",prevState.map)
        
        //if()
    }

    render() {
        // console.log("RENDERING");
        //console.log("RENDER - selected square - "+this.state.selectedSquare+" props position square - "+this.props.position)
        const pos = this.props.position;
        const piece = this.props.map[pos].charAt(0);
        if(this.props.boardFlipped){
            //console.log(this.props.map[pos].charAt(0))
            var playerPiece = (piece == "b") ?true :false;
        }else{
            //console.log(this.props.map[pos].charAt(0))
            var playerPiece = (piece == "w") ?true :false;
        }
        return <div 
                    className="square"
                    id= {this.props.position}
                    //onMouseDown={this.onMouseDown}
                    //onMouseUp={this.onMouseUp}
                    onClick={playerPiece ? this.onClickPlayer : this.onClick}
                    //onMouseOver={this.onMouseOver}
                    style={
                        
                        this.props.selectedSquare == this.props.position
                        ?   { 
                            width: this.props.width+ "px", 
                            height: this.props.width + "px", 
                            backgroundColor: "#304e6c"

                            //boxShadow: "inset 0px 0px 3px black",
                            //zIndex: "99"
                            } 
                        :   { 
                            width: this.props.width+ "px", 
                            height: this.props.width + "px", 
                            backgroundColor: this.props.squareColor
                            }
                        }>
                    {/* <Draggable
                    onDrag={this.onDrag}
                    onDragEnd={this.onMouseUp}
                    children={this.startPositions(this.props.width)}
                    /> */}
                    {this.startPositions(this.props.width)}
                </div>
                ;
    }
}

export default Square;
