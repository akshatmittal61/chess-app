import React from "react";
import "./styles.scss";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const Chessboard = () => {
	let board = [];
	for (let j = verticalAxis.length - 1; j >= 0; j--) {
		for (let i = 0; i < horizontalAxis.length; i++) {
			board.push(
				<div
					key={horizontalAxis[i] + verticalAxis[j]}
					className={
						`tile square ${i % 2 === j % 2 ? "white" : "black"}`
					}
				>
					({horizontalAxis[i]}+{verticalAxis[j]}){" "}
				</div>
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
