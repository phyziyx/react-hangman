interface IProps {
	currentGuess: string;
	hint: string;
}

const Word = ({ currentGuess, hint }: IProps) => {
	return (
		<>
			<h2>{currentGuess}</h2>
			<br />

			{hint && <b>Hint: {hint}</b>}
			<br />
		</>
	);
};

export default Word;
