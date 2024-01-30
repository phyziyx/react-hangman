interface IProps {
	word: string;
	currentGuess: string;
	hint: string;
}

const Word = ({ word, currentGuess, hint }: IProps) => {
	return (
		<>
			<h2>{currentGuess}</h2>
			<br />

			{hint && <b>Hint: {hint}</b>}
			<br />

			{word && <p>DEBUG: Current word selected is: {word}</p>}
		</>
	);
};

export default Word;
