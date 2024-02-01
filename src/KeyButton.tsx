import { useEffect, useState } from "react";

const KeyButton = ({
	letter,
	addLetter,
}: {
	letter: string;
	addLetter(letter: string): void;
}) => {
	const [isDisabled, setDisabled] = useState<boolean>(false);

	const clickHandler = () => {
		addLetter(letter);
		setDisabled(true);
	};

	const keyDownHandler = (e: KeyboardEvent) => {
		if (e.key.toLowerCase() !== letter.toLowerCase()) {
			return;
		}

		clickHandler();
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
			onKeyDown={(e) => {
				console.log(e.key);
				if (e.key.toLowerCase() === letter) {
					clickHandler();
				}
			}}
			onClick={() => clickHandler()}
			disabled={isDisabled}
		>
			{letter}
		</button>
	);
};

export default KeyButton;
