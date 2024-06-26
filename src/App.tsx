import { useEffect, useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import Hangman from "./components/Hangman";
import { GameState, MAX_STRIKES } from "./data";
import Footer from "./components/Footer";
import Status from "./components/Status";
import wordsManager from "./utilities/WordManager";

const App = () => {
	const [gameState, setGameState] = useState<GameState>(GameState.READY);
	const [word, setWord] = useState<string>("");
	const [currentGuess, setCurrentGuess] = useState<string>("");
	const [hint, setHint] = useState<string>("");
	const [strikes, setStrikes] = useState<number>(0);

	const addLetter = (letter: string) => {
		if (gameState !== GameState.PLAYING) return;

		letter = letter.toLowerCase();
		const locations: number[] = [];

		word.split("").forEach((char, index) => {
			if (char !== letter) return;
			locations.push(index);
		});

		if (locations.length === 0) {
			return incrementStrike();
		}

		const currentGuessSplit = currentGuess.split("");
		locations.forEach((posIdx) => {
			currentGuessSplit[posIdx] = letter;
		});

		const newGuess = currentGuessSplit.join("");
		setCurrentGuess(newGuess);

		if (newGuess === word) {
			setGameState(GameState.WON);
			console.log("game won");
		}
	};

	const incrementStrike = () => {
		setStrikes((oldStrikes) => {
			const newStrikes = oldStrikes + 1;

			if (newStrikes >= MAX_STRIKES) {
				setGameState(GameState.GAME_OVER);
			}

			return newStrikes;
		});
	};

	useEffect(() => {
		if (gameState !== GameState.READY) return;

		setGameState(GameState.PLAYING);
		const { newWord, newGuess, newHint } = wordsManager().selectWord();

		setWord(newWord);
		setCurrentGuess(newGuess);
		setHint(newHint);
	}, [gameState]);

	return (
		<>
			<h1 className="header">Hangman</h1>
			<Hangman strikes={strikes} />
			<Word currentGuess={currentGuess} hint={hint} />
			<Status gameState={gameState} />
			<Keyboard gameState={gameState} addLetter={addLetter} />
			<Footer />
		</>
	);
};

export default App;
