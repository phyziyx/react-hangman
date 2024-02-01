import { GameState } from "./data";

interface IProps {
	gameState: GameState;
}

const Status = ({ gameState }: IProps) => {
	const ignoreStates =
		gameState === GameState.PLAYING || gameState === GameState.READY;

	if (ignoreStates) {
		return <></>;
	}

	const statusClass =
		gameState === GameState.GAME_OVER ? "status lost" : "status won";

	return (
		<div className={statusClass}>
			<h2>
				{gameState === GameState.GAME_OVER
					? "You lost!"
					: gameState === GameState.WON
					? "You won!"
					: ""}
			</h2>
		</div>
	);
};

export default Status;
