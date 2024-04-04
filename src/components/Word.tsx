interface IProps {
	currentGuess: string;
	hint: string;
}

const Word = ({ currentGuess, hint }: IProps) => {
	return (
		<>
			<div
				style={{
					display: "flex",
					columnGap: "2em",
					position: "relative",
					textTransform: "capitalize",
					fontFamily: "monospace",
					justifyContent: "center",
					visibility: "visible",
				}}
			>
				{currentGuess.split("").map((word, idx) => (
					<h2
						key={idx}
						style={{
							borderBottom: "0.1em solid black",
						}}
					>
						{word}
					</h2>
				))}
			</div>
			{hint && <b>Hint: {hint}</b>}
			<br />
		</>
	);
};

export default Word;
