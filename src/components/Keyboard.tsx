import KeyButton from "./KeyButton";
import { GameState } from "../data";

interface IProps {
	gameState: GameState;
	addLetter(letter: string): void;
}

const Keyboard = ({ gameState, addLetter }: IProps) => {
	return (
		<>
			{[
				"A",
				"B",
				"C",
				"D",
				"E",
				"F",
				"G",
				"H",
				"I",
				"J",
				"K",
				"L",
				"M",
				"N",
				"O",
				"P",
				"Q",
				"R",
				"S",
				"T",
				"U",
				"V",
				"W",
				"X",
				"Y",
				"Z",
			].map((letter) => {
				return (
					<KeyButton
						key={letter}
						gameState={gameState}
						letter={letter}
						addLetter={addLetter}
					/>
				);
			})}
		</>
	);
};

export default Keyboard;
