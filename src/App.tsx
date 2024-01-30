import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Keyboard from "./Keyboard";
import Word from "./Word";
import WordManager from "./WordManager";

enum GameState {
	READY = 0,
	PLAYING = 1,
	GAME_OVER = 2,
}

function App() {
	const MAX_STRIKES = 3;

	const [gameState, setGameState] = useState<GameState>(GameState.READY);
	const [word, setWord] = useState<string>("");
	const [currentGuess, setCurrentGuess] = useState<string>("");
	const [hint, setHint] = useState<string>("");
	const [strikes, setStrikes] = useState<number>(0);

	const addLetter = (letter: string) => {
		letter = letter.toLowerCase();

		const locations: number[] = [];

		word.split("").forEach((char, index) => {
			if (char.toLowerCase() !== letter) return;
			locations.push(index);
		});

		if (locations.length === 0) return incrementStrike();

		setCurrentGuess((oldGuess) => {
			const newGuess = oldGuess.split("");

			locations.forEach((posIdx) => {
				newGuess[posIdx] = letter;
			});

			return newGuess.join("");
		});
	};

	const incrementStrike = () => {
		setStrikes((oldStrikes) => oldStrikes + 1);

		if (strikes <= MAX_STRIKES) {
			// Game over!
		}
	};

	useEffect(() => {
		if (gameState !== GameState.READY) return;

		setGameState(GameState.PLAYING);
		const { newWord, newGuess, newHint } = WordManager().selectWord();

		setWord(newWord);
		setCurrentGuess(newGuess);
		setHint(newHint);
	}, [gameState]);

	return (
		<>
			<h1>Hangman (React)</h1>
			<img src={viteLogo} className="logo" alt="Vite logo" />
			<div className="card">
				<Word word={word} currentGuess={currentGuess} hint={hint} />
			</div>
			<Keyboard addLetter={addLetter} />
			<footer>
				<p className="footer">
					Hangman (React) -- Made with ❤ by{" "}
					<a href="https://github.com/phyziyx" target="_blank">
						Phyziyx
					</a>
				</p>
			</footer>
		</>
	);
}

export default App;