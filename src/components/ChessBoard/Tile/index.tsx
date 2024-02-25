import React from "react";
import "./styles.scss";
import { Piece } from "../../../constants/chessboard";

interface TileProps {
	piece: Piece;
	number: number;
}

const Tile: React.FC<TileProps> = ({ piece, number }) => {
	return (
		<div className={`tile tile-${number % 2 !== 0 ? "white" : "black"}`}>
			{piece ? (
				<div
					className="tile-piece"
					style={{
						backgroundImage: `url(${piece.image})`,
					}}
				/>
			) : null}
		</div>
	);
};

export default Tile;
