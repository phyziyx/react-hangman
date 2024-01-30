import KeyButton from "./KeyButton";

const Keyboard = ({ addLetter }: { addLetter(letter: string): void }) => {
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
						letter={letter}
						addLetter={addLetter}
					/>
				);
			})}
		</>
	);
};

export default Keyboard;
