import wordsList from "./words.json";

interface ICharactersCount {
	[name: string]: number;
}

const BLACKLISTED_CHARACTERS = [' ', `'`];

class WordsManager {
	censorWord = (word: string) => {
		const letters = word.split('');
		const charactersCount: ICharactersCount = {};
		letters.forEach(letter => {
			charactersCount[letter] = (charactersCount[letter] || 0) + 1;
		});

		const sortedCharactersCount = Object.keys(charactersCount).sort((a, b) => charactersCount[b] - charactersCount[a]);

		const sortedTable: ICharactersCount = {};
		sortedCharactersCount.forEach(key => {
			sortedTable[key] = charactersCount[key];
		});

		let censored = word;
		for (let i = 0, len = sortedCharactersCount.length; i < len - 2; i++) {
			const letter = sortedCharactersCount[i];
			if (BLACKLISTED_CHARACTERS.includes(letter)) continue;

			censored = censored.replaceAll(letter, '_');
		}

		return censored;
	}

	selectWord = () => {
		const wordsLen = wordsList.length;
		const idx = Math.floor(wordsLen * Math.random());

		const selectedWord = wordsList[idx];
		const newWord = selectedWord.word.toLowerCase();
		const newGuess = this.censorWord(newWord);

		return {
			newWord,
			newHint: selectedWord.hint,
			newGuess
		}
	};
}

function wordsManager() {
	return new WordsManager();
}

export default wordsManager;
