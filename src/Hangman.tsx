import strike_0 from "./assets/strike_0.webp";
import strike_1 from "./assets/strike_1.webp";
import strike_2 from "./assets/strike_2.webp";
import strike_3 from "./assets/strike_3.webp";

interface IProps {
	strikes: number;
}

const Hangman = ({ strikes }: IProps) => {
	const getImage = () => {
		switch (strikes) {
			case 0:
				return strike_0;
			case 1:
				return strike_1;
			case 2:
				return strike_2;
			case 3:
				return strike_3;
			default:
				return strike_0;
		}
	};

	return <img src={getImage()} className="logo" alt="Hangman" />;
};

export default Hangman;
