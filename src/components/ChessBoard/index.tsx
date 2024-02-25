import React, { useRef } from "react";
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

	let activePiece: HTMLElement | null = null;
	const chessBoardRef = useRef<any>(null);

	const grabPiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const element = e.target as HTMLDivElement;
		if (element.classList.contains("tile-piece")) {
			console.log("grabbed piece", element);
			const x = e.clientX - 50;
			const y = e.clientY - 50;

			element.style.position = "absolute";
			element.style.left = `${x}px`;
			element.style.top = `${y}px`;

			activePiece = element;
		}
	};

	const dropPiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (activePiece) {
			console.log("dropped piece", activePiece);
			activePiece = null;
		}
	};

	const movePiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const chessBoard = chessBoardRef.current;
		if (
			activePiece &&
			chessBoard &&
			activePiece.classList.contains("tile-piece")
		) {
			console.log("moved piece", activePiece);
			const minX = +chessBoard.offsetLeft - 25;
			const minY = +chessBoard.offsetTop - 25;
			const maxX = +chessBoard.offsetLeft + chessBoard.clientWidth - 75;
			const maxY = +chessBoard.offsetTop + chessBoard.clientHeight - 75;
			const x = e.clientX - 50;
			const y = e.clientY - 50;

			activePiece.style.position = "absolute";

			if (x < minX) {
				activePiece.style.left = `${minX}px`;
			} else if (x > maxX) {
				activePiece.style.left = `${maxX}px`;
			} else {
				activePiece.style.left = `${x}px`;
			}

			if (y < minY) {
				activePiece.style.top = `${minY}px`;
			} else if (y > maxY) {
				activePiece.style.top = `${maxY}px`;
			} else {
				activePiece.style.top = `${y}px`;
			}
		}
	};

	return (
		<div
			className="chessboard"
			id="chessboard"
			onMouseDown={grabPiece}
			onMouseMove={movePiece}
			onMouseUp={dropPiece}
			ref={chessBoardRef}
		>
			{board}
		</div>
	);
};

export default Chessboard;
