import React from "react";
import "./styles.scss";
import Tile from "./Tile";
import { Piece, pieces } from "../../constants/chessboard";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const Chessboard = () => {
	let board = [];
	for (let j = verticalAxis.length - 1; j >= 0; j--) {
		for (let i = 0; i < horizontalAxis.length; i++) {
			board.push(
				<Tile
					key={horizontalAxis[i] + verticalAxis[j]}
					number={i + j + 2}
					piece={
						pieces.find(
							(piece) => piece.x === i && piece.y === j
						) as Piece
					}
				/>
			);
		}
	}
	return (
		<div className="chessboard" id="chessboard">
			{board}
		</div>
	);
};

export default Chessboard;
