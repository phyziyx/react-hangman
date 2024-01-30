import { useState } from "react";

const KeyButton = ({
	letter,
	addLetter,
}: {
	letter: string;
	addLetter(letter: string): void;
}) => {
	const [isDisabled, setDisabled] = useState<boolean>(false);

	return (
		<button
			key={letter}
			onClick={() => {
				addLetter(letter);
				setDisabled(true);
			}}
			disabled={isDisabled}
		>
			{letter}
		</button>
	);
};

export default KeyButton;
