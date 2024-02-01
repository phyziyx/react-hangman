import { useEffect, useState } from "react";
import { GameState } from "./data";

interface IProps {
	gameState: GameState;
	letter: string;
	addLetter(letter: string): void;
}

const KeyButton = ({ gameState, letter, addLetter }: IProps) => {
	const [isDisabled, setDisabled] = useState<boolean>(false);

	const guessLetter = () => {
		if (gameState !== GameState.PLAYING) return;

		addLetter(letter);
		setDisabled(true);
	};

	const keyDownHandler = (e: KeyboardEvent) => {
		if (e.key.toLowerCase() !== letter.toLowerCase()) {
			return;
		}

		guessLetter();
	};

	useEffect(() => {
		document.addEventListener("keydown", keyDownHandler);

		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	});

	return (
		<button
			key={letter}
			onClick={() => guessLetter()}
			disabled={isDisabled}
		>
			{letter}
		</button>
	);
};

export default KeyButton;
